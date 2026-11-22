import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFilesKey() {
  return ['files'] as const
}

export function getPostFiles202609FilesKey() {
  return ['files', '/files/2026-09/files', 'POST'] as const
}

export function usePostFiles202609Files<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['files']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)['2026-09']['files']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFiles202609FilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)['2026-09']['files']['$post']> },
      ) => parseResponse(client.files['2026-09'].files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFiles202609FilesImportFromUrlAsyncKey() {
  return ['files', '/files/2026-09/files/import-from-url/async', 'POST'] as const
}

export function usePostFiles202609FilesImportFromUrlAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.files)['2026-09']['files']['import-from-url']['async']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFiles202609FilesImportFromUrlAsyncKey()
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
            (typeof client.files)['2026-09']['files']['import-from-url']['async']['$post']
          >
        },
      ) =>
        parseResponse(
          client.files['2026-09'].files['import-from-url'].async.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusKey(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
  >,
) {
  return ['files', '/files/2026-09/files/import-from-url/async/tasks/:taskId/status', args] as const
}

export function useGetFiles202609FilesImportFromUrlAsyncTasksTaskIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusKey(args)
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
                (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
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
          client.files['2026-09'].files['import-from-url'].async.tasks[':taskId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FilesImportFromUrlAsyncTasksTaskIdStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusKey(args)
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
                (typeof client.files)['2026-09']['files']['import-from-url']['async']['tasks'][':taskId']['status']['$get']
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
          client.files['2026-09'].files['import-from-url'].async.tasks[':taskId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFiles202609FilesSearchKey(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>,
) {
  return ['files', '/files/2026-09/files/search', args] as const
}

export function useGetFiles202609FilesSearch<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
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
        ? getGetFiles202609FilesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files['2026-09'].files.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FilesSearch<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
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
        ? getGetFiles202609FilesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files['2026-09'].files.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFiles202609FilesStatPathKey(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>,
) {
  return ['files', '/files/2026-09/files/stat/:path', args] as const
}

export function useGetFiles202609FilesStatPath<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>>
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
        ? getGetFiles202609FilesStatPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files['2026-09'].files.stat[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FilesStatPath<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>>
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
        ? getGetFiles202609FilesStatPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files']['stat'][':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files['2026-09'].files.stat[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFiles202609FilesFileIdKey(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>,
) {
  return ['files', '/files/2026-09/files/:fileId', args] as const
}

export function useGetFiles202609FilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
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
        ? getGetFiles202609FilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files['2026-09'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
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
        ? getGetFiles202609FilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files['2026-09'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFiles202609FilesFileIdKey() {
  return ['files', '/files/2026-09/files/:fileId', 'PUT'] as const
}

export function usePutFiles202609FilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFiles202609FilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$put']> },
      ) => parseResponse(client.files['2026-09'].files[':fileId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFiles202609FilesFileIdKey() {
  return ['files', '/files/2026-09/files/:fileId', 'DELETE'] as const
}

export function useDeleteFiles202609FilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFiles202609FilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$delete']>
        },
      ) => parseResponse(client.files['2026-09'].files[':fileId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFiles202609FilesFileIdKey() {
  return ['files', '/files/2026-09/files/:fileId', 'PATCH'] as const
}

export function usePatchFiles202609FilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFiles202609FilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['$patch']>
        },
      ) => parseResponse(client.files['2026-09'].files[':fileId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFiles202609FilesFileIdDownloadKey(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>,
) {
  return ['files', '/files/2026-09/files/:fileId/download', args] as const
}

export function useGetFiles202609FilesFileIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
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
        ? getGetFiles202609FilesFileIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files['2026-09'].files[':fileId'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FilesFileIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
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
        ? getGetFiles202609FilesFileIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files['2026-09'].files[':fileId'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFiles202609FilesFileIdGdprDeleteKey() {
  return ['files', '/files/2026-09/files/:fileId/gdpr-delete', 'DELETE'] as const
}

export function useDeleteFiles202609FilesFileIdGdprDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.files)['2026-09']['files'][':fileId']['gdpr-delete']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFiles202609FilesFileIdGdprDeleteKey()
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
            (typeof client.files)['2026-09']['files'][':fileId']['gdpr-delete']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.files['2026-09'].files[':fileId']['gdpr-delete'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFiles202609FilesFileIdSignedUrlKey(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
  >,
) {
  return ['files', '/files/2026-09/files/:fileId/signed-url', args] as const
}

export function useGetFiles202609FilesFileIdSignedUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
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
        ? getGetFiles202609FilesFileIdSignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files['2026-09'].files[':fileId']['signed-url'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FilesFileIdSignedUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
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
        ? getGetFiles202609FilesFileIdSignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)['2026-09']['files'][':fileId']['signed-url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files['2026-09'].files[':fileId']['signed-url'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFiles202609FoldersKey() {
  return ['files', '/files/2026-09/folders', 'POST'] as const
}

export function usePostFiles202609Folders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)['2026-09']['folders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFiles202609FoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)['2026-09']['folders']['$post']> },
      ) => parseResponse(client.files['2026-09'].folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFiles202609FoldersSearchKey(
  args: InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>,
) {
  return ['files', '/files/2026-09/folders/search', args] as const
}

export function useGetFiles202609FoldersSearch<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
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
        ? getGetFiles202609FoldersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files['2026-09'].folders.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FoldersSearch<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
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
        ? getGetFiles202609FoldersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files['2026-09'].folders.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFiles202609FoldersFolderIdKey(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>,
) {
  return ['files', '/files/2026-09/folders/:folderId', args] as const
}

export function useGetFiles202609FoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>>
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
        ? getGetFiles202609FoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files['2026-09'].folders[':folderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>>
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
        ? getGetFiles202609FoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files['2026-09'].folders[':folderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFiles202609FoldersFolderIdKey() {
  return ['files', '/files/2026-09/folders/:folderId', 'DELETE'] as const
}

export function useDeleteFiles202609FoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFiles202609FoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$delete']>
        },
      ) => parseResponse(client.files['2026-09'].folders[':folderId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFiles202609FoldersFolderIdKey() {
  return ['files', '/files/2026-09/folders/:folderId', 'PATCH'] as const
}

export function usePatchFiles202609FoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFiles202609FoldersFolderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderId']['$patch']>
        },
      ) => parseResponse(client.files['2026-09'].folders[':folderId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFiles202609FoldersFolderPathKey(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>,
) {
  return ['files', '/files/2026-09/folders/:folderPath', args] as const
}

export function useGetFiles202609FoldersFolderPath<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>>
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
        ? getGetFiles202609FoldersFolderPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files['2026-09'].folders[':folderPath'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFiles202609FoldersFolderPath<TError = unknown>(
  args: InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>>
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
        ? getGetFiles202609FoldersFolderPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)['2026-09']['folders'][':folderPath']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files['2026-09'].folders[':folderPath'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFiles202609FoldersFolderPathKey() {
  return ['files', '/files/2026-09/folders/:folderPath', 'DELETE'] as const
}

export function useDeleteFiles202609FoldersFolderPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.files)['2026-09']['folders'][':folderPath']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFiles202609FoldersFolderPathKey()
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
            (typeof client.files)['2026-09']['folders'][':folderPath']['$delete']
          >
        },
      ) =>
        parseResponse(client.files['2026-09'].folders[':folderPath'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
