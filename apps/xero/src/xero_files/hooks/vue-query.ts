import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Files.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Files', '/Files', keyArgs] as const
}

export function getFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$get>>>>>,
          ReturnType<typeof getFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Files.$post>>>>>,
          TError,
          InferRequestType<typeof client.Files.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Files)[':FileId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Files', '/Files/:FileId', keyArgs] as const
}

export function getFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Files)[':FileId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Files[':FileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Files)[':FileId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesFileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Files[':FileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.Files)[':FileId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesFileIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Files)[':FileId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Files)[':FileId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostFilesFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FolderId']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.Files)[':FolderId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesFolderIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Files)[':FileId']['Content']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Files', '/Files/:FileId/Content', keyArgs] as const
}

export function getFilesFileIdContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Files)[':FileId']['Content']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Files[':FileId'].Content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Files)[':FileId']['Content']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Files)[':FileId']['Content']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Files)[':FileId']['Content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Files)[':FileId']['Content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdContentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Files[':FileId'].Content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdAssociationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Files)[':FileId']['Associations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Files', '/Files/:FileId/Associations', keyArgs] as const
}

export function getFilesFileIdAssociationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Files)[':FileId']['Associations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdAssociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Files[':FileId'].Associations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Files)[':FileId']['Associations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Files)[':FileId']['Associations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdAssociationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdAssociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Files[':FileId'].Associations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFilesFileIdAssociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilesFileIdAssociationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteFilesFileIdAssociationsObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.Files)[':FileId']['Associations'][':ObjectId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFilesFileIdAssociationsObjectIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssociationsObjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Associations)[':ObjectId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Associations', '/Associations/:ObjectId', keyArgs] as const
}

export function getAssociationsObjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Associations)[':ObjectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Associations[':ObjectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Associations)[':ObjectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Associations)[':ObjectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Associations)[':ObjectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Associations)[':ObjectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssociationsObjectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Associations)[':ObjectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Associations[':ObjectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Associations.Count.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Associations', '/Associations/Count', keyArgs] as const
}

export function getAssociationsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Associations.Count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Associations.Count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Associations.Count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Associations.Count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Associations.Count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Associations.Count.$get>>>
            >
          >,
          ReturnType<typeof getAssociationsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Associations.Count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Associations.Count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Folders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Folders', '/Folders', keyArgs] as const
}

export function getFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Folders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$get>>>>
          >,
          ReturnType<typeof getFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Folders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Folders.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFoldersFolderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Folders)[':FolderId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Folders', '/Folders/:FolderId', keyArgs] as const
}

export function getFoldersFolderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Folders)[':FolderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Folders[':FolderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Folders)[':FolderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Folders[':FolderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Folders)[':FolderId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Folders)[':FolderId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInboxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Inbox.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Inbox', '/Inbox', keyArgs] as const
}

export function getInboxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Inbox.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Inbox.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInbox<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Inbox.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Inbox.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Inbox.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Inbox.$get>>>>>,
          ReturnType<typeof getInboxQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Inbox.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInboxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Inbox.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
