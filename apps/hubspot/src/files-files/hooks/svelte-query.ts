import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostFiles202609Files<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFiles202609FilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostFiles202609FilesImportFromUrlAsync<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFiles202609FilesImportFromUrlAsyncMutationOptions<
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

export function getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
  >,
) {
  return ['files', '/files/2026-09/files/import-from-url/async/tasks/:taskId/status', args] as const
}

export function getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].files['import-from-url'].async.tasks[':taskId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FilesImportFromUrlAsyncTasksTaskIdStatus<
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
  args: () => InferRequestType<
    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFiles202609FilesSearchQueryKey(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>,
) {
  return ['files', '/files/2026-09/files/search', args] as const
}

export function getFiles202609FilesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FilesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].files.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FilesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFiles202609FilesSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFiles202609FilesStatPathQueryKey(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>,
) {
  return ['files', '/files/2026-09/files/stat/:path', args] as const
}

export function getFiles202609FilesStatPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FilesStatPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].files.stat[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FilesStatPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFiles202609FilesStatPathQueryKey>
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
      ...getFiles202609FilesStatPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFiles202609FilesFileIdQueryKey(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>,
) {
  return ['files', '/files/2026-09/files/:fileId', args] as const
}

export function getFiles202609FilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFiles202609FilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutFiles202609FilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFiles202609FilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteFiles202609FilesFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFiles202609FilesFileIdMutationOptions<
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

export function createPatchFiles202609FilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFiles202609FilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFiles202609FilesFileIdDownloadQueryKey(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>,
) {
  return ['files', '/files/2026-09/files/:fileId/download', args] as const
}

export function getFiles202609FilesFileIdDownloadQueryOptions<
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
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FilesFileIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].files[':fileId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FilesFileIdDownload<
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
  args: () => InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFiles202609FilesFileIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteFiles202609FilesFileIdGdprDelete<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFiles202609FilesFileIdGdprDeleteMutationOptions<
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

export function getFiles202609FilesFileIdSignedUrlQueryKey(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
  >,
) {
  return ['files', '/files/2026-09/files/:fileId/signed-url', args] as const
}

export function getFiles202609FilesFileIdSignedUrlQueryOptions<
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
  args: InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FilesFileIdSignedUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].files[':fileId']['signed-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FilesFileIdSignedUrl<
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
  args: () => InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFiles202609FilesFileIdSignedUrlQueryKey>
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
      ...getFiles202609FilesFileIdSignedUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostFiles202609Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFiles202609FoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFiles202609FoldersSearchQueryKey(
  args: InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>,
) {
  return ['files', '/files/2026-09/folders/search', args] as const
}

export function getFiles202609FoldersSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FoldersSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].folders.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FoldersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFiles202609FoldersSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFiles202609FoldersFolderIdQueryKey(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>,
) {
  return ['files', '/files/2026-09/folders/:folderId', args] as const
}

export function getFiles202609FoldersFolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FoldersFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].folders[':folderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFiles202609FoldersFolderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteFiles202609FoldersFolderId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFiles202609FoldersFolderIdMutationOptions<
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

export function createPatchFiles202609FoldersFolderId<
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
                ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFiles202609FoldersFolderIdMutationOptions<
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

export function getFiles202609FoldersFolderPathQueryKey(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>,
) {
  return ['files', '/files/2026-09/folders/:folderPath', args] as const
}

export function getFiles202609FoldersFolderPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFiles202609FoldersFolderPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files['2026-09'].folders[':folderPath'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFiles202609FoldersFolderPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFiles202609FoldersFolderPathQueryKey>
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
      ...getFiles202609FoldersFolderPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteFiles202609FoldersFolderPath<
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
                  ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFiles202609FoldersFolderPathMutationOptions<
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
