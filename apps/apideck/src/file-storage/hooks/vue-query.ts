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

export function getFileStorageKey() {
  return ['file-storage'] as const
}

export function getFileStorageDriveGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/drive-groups', keyArgs] as const
}

export function getFileStorageDriveGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageDriveGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage']['drive-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageDriveGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['drive-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageDriveGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageDriveGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageDriveGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage']['drive-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFileStorageDriveGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageDriveGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageDriveGroupsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/drive-groups/:id', keyArgs] as const
}

export function getFileStorageDriveGroupsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageDriveGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage']['drive-groups'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageDriveGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageDriveGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageDriveGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageDriveGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage']['drive-groups'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFileStorageDriveGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteFileStorageDriveGroupsIdMutationOptions<
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

export function usePatchFileStorageDriveGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['file-storage']['drive-groups'][':id']['$patch']>,
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
  const mutationDefaults = getPatchFileStorageDriveGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageDrivesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['drives']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/drives', keyArgs] as const
}

export function getFileStorageDrivesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['drives']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageDrivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage'].drives.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageDrives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['drives']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageDrivesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['drives']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageDrivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageDrivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage'].drives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFileStorageDrives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageDrivesMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageDrivesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/drives/:id', keyArgs] as const
}

export function getFileStorageDrivesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageDrivesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage'].drives[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageDrivesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['drives'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageDrivesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['drives'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageDrivesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageDrivesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage'].drives[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFileStorageDrivesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFileStorageDrivesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchFileStorageDrivesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFileStorageDrivesIdMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['files']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/files', keyArgs] as const
}

export function getFileStorageFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageFilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-storage']['files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFileStorageFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageFilesMutationOptions<TError, TOnMutateResult>(
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

export function usePostFileStorageFilesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageFilesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageFilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/files/:id', keyArgs] as const
}

export function getFileStorageFilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageFilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage'].files[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageFilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['files'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageFilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageFilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageFilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage'].files[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFileStorageFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFileStorageFilesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchFileStorageFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFileStorageFilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageFilesIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/files/:id/download', keyArgs] as const
}

export function getFileStorageFilesIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageFilesIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage'].files[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageFilesIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['files'][':id']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFileStorageFilesIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['files'][':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageFilesIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageFilesIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage'].files[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFileStorageFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageFoldersMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageFoldersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/folders/:id', keyArgs] as const
}

export function getFileStorageFoldersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageFoldersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage'].folders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageFoldersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['folders'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageFoldersIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['folders'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageFoldersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageFoldersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage'].folders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFileStorageFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFileStorageFoldersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchFileStorageFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFileStorageFoldersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostFileStorageFoldersIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageFoldersIdCopyMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageSharedLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/shared-links', keyArgs] as const
}

export function getFileStorageSharedLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageSharedLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage']['shared-links'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageSharedLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['file-storage']['shared-links']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageSharedLinksQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageSharedLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageSharedLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage']['shared-links'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFileStorageSharedLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageSharedLinksMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageSharedLinksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/shared-links/:id', keyArgs] as const
}

export function getFileStorageSharedLinksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageSharedLinksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage']['shared-links'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageSharedLinksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFileStorageSharedLinksIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageSharedLinksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageSharedLinksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage']['shared-links'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFileStorageSharedLinksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteFileStorageSharedLinksIdMutationOptions<
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

export function usePatchFileStorageSharedLinksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['file-storage']['shared-links'][':id']['$patch']>,
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
  const mutationDefaults = getPatchFileStorageSharedLinksIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostFileStorageUploadSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageUploadSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getFileStorageUploadSessionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-storage', '/file-storage/upload-sessions/:id', keyArgs] as const
}

export function getFileStorageUploadSessionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileStorageUploadSessionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-storage']['upload-sessions'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFileStorageUploadSessionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFileStorageUploadSessionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFileStorageUploadSessionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileStorageUploadSessionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-storage']['upload-sessions'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutFileStorageUploadSessionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['file-storage']['upload-sessions'][':id']['$put']>,
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
  const mutationDefaults = getPutFileStorageUploadSessionsIdMutationOptions<
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

export function useDeleteFileStorageUploadSessionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFileStorageUploadSessionsIdMutationOptions<
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

export function usePostFileStorageUploadSessionsIdFinish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileStorageUploadSessionsIdFinishMutationOptions<
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
