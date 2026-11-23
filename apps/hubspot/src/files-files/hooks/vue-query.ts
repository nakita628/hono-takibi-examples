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

export function getFilesKey() {
  return ['files'] as const
}

export function getPostFiles202609FilesMutationKey() {
  return ['files', '/files/2026-09/files', 'POST'] as const
}

export function getPostFiles202609FilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)['2026-09']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFiles202609FilesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)['2026-09']['files']['$post']>) {
      return parseResponse(client.files['2026-09'].files.$post(args, options))
    },
  })
}

export function usePostFiles202609Files<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['files']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)['2026-09']['files']['$post']>,
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
  const mutationDefaults = getPostFiles202609FilesMutationOptions<TError, TOnMutateResult>(
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

export function getPostFiles202609FilesImportFromUrlAsyncMutationKey() {
  return ['files', '/files/2026-09/files/import-from-url/async', 'POST'] as const
}

export function getPostFiles202609FilesImportFromUrlAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)['2026-09']['files']['import-from-url']['async']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.files)['2026-09']['files']['import-from-url']['async']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFiles202609FilesImportFromUrlAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)['2026-09']['files']['import-from-url']['async']['$post']
      >,
    ) {
      return parseResponse(
        client.files['2026-09'].files['import-from-url'].async.$post(args, options),
      )
    },
  })
}

export function usePostFiles202609FilesImportFromUrlAsync<
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
                    (typeof client.files)['2026-09']['files']['import-from-url']['async']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.files)['2026-09']['files']['import-from-url']['async']['$post']
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
  const mutationDefaults = getPostFiles202609FilesImportFromUrlAsyncMutationOptions<
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

export function getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
    >
  >,
) {
  return [
    'files',
    '/files/2026-09/files/import-from-url/async/tasks/:taskId/status',
    toValue(args),
  ] as const
}

export function getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].files['import-from-url'].async.tasks[':taskId'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFiles202609FilesImportFromUrlAsyncTasksTaskIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
                  >
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
                  ReturnType<
                    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].files['import-from-url'].async.tasks[':taskId'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFiles202609FilesSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>
  >,
) {
  return ['files', '/files/2026-09/files/search', toValue(args)] as const
}

export function getFiles202609FilesSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FilesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].files.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiles202609FilesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFiles202609FilesSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FilesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiles202609FilesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].files.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFiles202609FilesStatPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>
  >,
) {
  return ['files', '/files/2026-09/files/stat/:path', toValue(args)] as const
}

export function getFiles202609FilesStatPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FilesStatPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].files.stat[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiles202609FilesStatPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>
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
                  ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFiles202609FilesStatPathQueryKey>
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
          Awaited<ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FilesStatPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiles202609FilesStatPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].files.stat[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFiles202609FilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>
  >,
) {
  return ['files', '/files/2026-09/files/:fileId', toValue(args)] as const
}

export function getFiles202609FilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].files[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiles202609FilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFiles202609FilesFileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiles202609FilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].files[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFiles202609FilesFileIdMutationKey() {
  return ['files', '/files/2026-09/files/:fileId', 'PUT'] as const
}

export function getPutFiles202609FilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFiles202609FilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$put']>,
    ) {
      return parseResponse(client.files['2026-09'].files[':fileId'].$put(args, options))
    },
  })
}

export function usePutFiles202609FilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$put']>,
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
  const mutationDefaults = getPutFiles202609FilesFileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFiles202609FilesFileIdMutationKey() {
  return ['files', '/files/2026-09/files/:fileId', 'DELETE'] as const
}

export function getDeleteFiles202609FilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFiles202609FilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>,
    ) {
      return parseResponse(client.files['2026-09'].files[':fileId'].$delete(args, options))
    },
  })
}

export function useDeleteFiles202609FilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>,
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
  const mutationDefaults = getDeleteFiles202609FilesFileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchFiles202609FilesFileIdMutationKey() {
  return ['files', '/files/2026-09/files/:fileId', 'PATCH'] as const
}

export function getPatchFiles202609FilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFiles202609FilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>,
    ) {
      return parseResponse(client.files['2026-09'].files[':fileId'].$patch(args, options))
    },
  })
}

export function usePatchFiles202609FilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>,
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
  const mutationDefaults = getPatchFiles202609FilesFileIdMutationOptions<TError, TOnMutateResult>(
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

export function getFiles202609FilesFileIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
  >,
) {
  return ['files', '/files/2026-09/files/:fileId/download', toValue(args)] as const
}

export function getFiles202609FilesFileIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FilesFileIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].files[':fileId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiles202609FilesFileIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.files)['2026-09']['files'][':fileId']['download']['$get']
                  >
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
                  ReturnType<
                    (typeof client.files)['2026-09']['files'][':fileId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFiles202609FilesFileIdDownloadQueryKey>
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
          Awaited<
            ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FilesFileIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiles202609FilesFileIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].files[':fileId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFiles202609FilesFileIdGdprDeleteMutationKey() {
  return ['files', '/files/2026-09/files/:fileId/gdpr-delete', 'DELETE'] as const
}

export function getDeleteFiles202609FilesFileIdGdprDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)['2026-09']['files'][':fileId']['gdpr-delete']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.files)['2026-09']['files'][':fileId']['gdpr-delete']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFiles202609FilesFileIdGdprDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)['2026-09']['files'][':fileId']['gdpr-delete']['$delete']
      >,
    ) {
      return parseResponse(
        client.files['2026-09'].files[':fileId']['gdpr-delete'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFiles202609FilesFileIdGdprDelete<
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
                      (typeof client.files)['2026-09']['files'][':fileId']['gdpr-delete']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.files)['2026-09']['files'][':fileId']['gdpr-delete']['$delete']
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
  const mutationDefaults = getDeleteFiles202609FilesFileIdGdprDeleteMutationOptions<
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

export function getFiles202609FilesFileIdSignedUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
  >,
) {
  return ['files', '/files/2026-09/files/:fileId/signed-url', toValue(args)] as const
}

export function getFiles202609FilesFileIdSignedUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FilesFileIdSignedUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].files[':fileId']['signed-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiles202609FilesFileIdSignedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
                  >
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
                  ReturnType<
                    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFiles202609FilesFileIdSignedUrlQueryKey>
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
          Awaited<
            ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FilesFileIdSignedUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiles202609FilesFileIdSignedUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].files[':fileId']['signed-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFiles202609FoldersMutationKey() {
  return ['files', '/files/2026-09/folders', 'POST'] as const
}

export function getPostFiles202609FoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)['2026-09']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFiles202609FoldersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)['2026-09']['folders']['$post']>) {
      return parseResponse(client.files['2026-09'].folders.$post(args, options))
    },
  })
}

export function usePostFiles202609Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)['2026-09']['folders']['$post']>,
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
  const mutationDefaults = getPostFiles202609FoldersMutationOptions<TError, TOnMutateResult>(
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

export function getFiles202609FoldersSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>
  >,
) {
  return ['files', '/files/2026-09/folders/search', toValue(args)] as const
}

export function getFiles202609FoldersSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FoldersSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].folders.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiles202609FoldersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFiles202609FoldersSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FoldersSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiles202609FoldersSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].folders.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFiles202609FoldersFolderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>
  >,
) {
  return ['files', '/files/2026-09/folders/:folderId', toValue(args)] as const
}

export function getFiles202609FoldersFolderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FoldersFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].folders[':folderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiles202609FoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>
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
                  ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFiles202609FoldersFolderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FoldersFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiles202609FoldersFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].folders[':folderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFiles202609FoldersFolderIdMutationKey() {
  return ['files', '/files/2026-09/folders/:folderId', 'DELETE'] as const
}

export function getDeleteFiles202609FoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFiles202609FoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>,
    ) {
      return parseResponse(client.files['2026-09'].folders[':folderId'].$delete(args, options))
    },
  })
}

export function useDeleteFiles202609FoldersFolderId<
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
                    ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>,
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
  const mutationDefaults = getDeleteFiles202609FoldersFolderIdMutationOptions<
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

export function getPatchFiles202609FoldersFolderIdMutationKey() {
  return ['files', '/files/2026-09/folders/:folderId', 'PATCH'] as const
}

export function getPatchFiles202609FoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFiles202609FoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>,
    ) {
      return parseResponse(client.files['2026-09'].folders[':folderId'].$patch(args, options))
    },
  })
}

export function usePatchFiles202609FoldersFolderId<
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
                  ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>,
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
  const mutationDefaults = getPatchFiles202609FoldersFolderIdMutationOptions<
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

export function getFiles202609FoldersFolderPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>
  >,
) {
  return ['files', '/files/2026-09/folders/:folderPath', toValue(args)] as const
}

export function getFiles202609FoldersFolderPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFiles202609FoldersFolderPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files['2026-09'].folders[':folderPath'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFiles202609FoldersFolderPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>
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
                  ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFiles202609FoldersFolderPathQueryKey>
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
          Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFiles202609FoldersFolderPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFiles202609FoldersFolderPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files['2026-09'].folders[':folderPath'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFiles202609FoldersFolderPathMutationKey() {
  return ['files', '/files/2026-09/folders/:folderPath', 'DELETE'] as const
}

export function getDeleteFiles202609FoldersFolderPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFiles202609FoldersFolderPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$delete']>,
    ) {
      return parseResponse(client.files['2026-09'].folders[':folderPath'].$delete(args, options))
    },
  })
}

export function useDeleteFiles202609FoldersFolderPath<
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
                      (typeof client.files)['2026-09']['folders'][':folderPath']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$delete']>,
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
  const mutationDefaults = getDeleteFiles202609FoldersFolderPathMutationOptions<
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
