import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChangesKey() {
  return ['changes'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getInstancesKey() {
  return ['instances'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getModalitiesKey() {
  return ['modalities'] as const
}

export function getPatientsKey() {
  return ['patients'] as const
}

export function getPeersKey() {
  return ['peers'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getQueriesKey() {
  return ['queries'] as const
}

export function getSeriesKey() {
  return ['series'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getStorageCommitmentKey() {
  return ['storage-commitment'] as const
}

export function getStudiesKey() {
  return ['studies'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getToolsKey() {
  return ['tools'] as const
}

export function getGetChangesKey(args: InferRequestType<typeof client.changes.$get>) {
  return ['changes', '/changes', args] as const
}

export function useGetChanges<TError = unknown>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.changes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChanges<TError = unknown>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.changes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteChangesKey() {
  return ['changes', '/changes', 'DELETE'] as const
}

export function useDeleteChanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.changes.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportsKey(args: InferRequestType<typeof client.exports.$get>) {
  return ['exports', '/exports', args] as const
}

export function useGetExports<TError = unknown>(
  args: InferRequestType<typeof client.exports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.exports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetExports<TError = unknown>(
  args: InferRequestType<typeof client.exports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.exports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteExportsKey() {
  return ['exports', '/exports', 'DELETE'] as const
}

export function useDeleteExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.exports.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesKey(args: InferRequestType<typeof client.instances.$get>) {
  return ['instances', '/instances', args] as const
}

export function useGetInstances<TError = unknown>(
  args: InferRequestType<typeof client.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstances<TError = unknown>(
  args: InferRequestType<typeof client.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesKey() {
  return ['instances', '/instances', 'POST'] as const
}

export function usePostInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.instances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.instances.$post> }) =>
        parseResponse(client.instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesIdKey(
  args: InferRequestType<(typeof client.instances)[':id']['$get']>,
) {
  return ['instances', '/instances/:id', args] as const
}

export function useGetInstancesId<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstancesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesId<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstancesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInstancesIdKey() {
  return ['instances', '/instances/:id', 'DELETE'] as const
}

export function useDeleteInstancesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstancesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instances)[':id']['$delete']> },
      ) => parseResponse(client.instances[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstancesIdAnonymizeKey() {
  return ['instances', '/instances/:id/anonymize', 'POST'] as const
}

export function usePostInstancesIdAnonymize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesIdAnonymizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']> },
      ) => parseResponse(client.instances[':id'].anonymize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>,
) {
  return ['instances', '/instances/:id/attachments', args] as const
}

export function useGetInstancesIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
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
        ? getGetInstancesIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
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
        ? getGetInstancesIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name', keyArgs] as const
}

export function useGetInstancesIdAttachmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
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
        ? getGetInstancesIdAttachmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
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
        ? getGetInstancesIdAttachmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInstancesIdAttachmentsNameKey() {
  return ['instances', '/instances/:id/attachments/:name', 'PUT'] as const
}

export function usePutInstancesIdAttachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstancesIdAttachmentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>
        },
      ) => parseResponse(client.instances[':id'].attachments[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstancesIdAttachmentsNameKey() {
  return ['instances', '/instances/:id/attachments/:name', 'DELETE'] as const
}

export function useDeleteInstancesIdAttachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstancesIdAttachmentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>
        },
      ) => parseResponse(client.instances[':id'].attachments[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstancesIdAttachmentsNameCompressKey() {
  return ['instances', '/instances/:id/attachments/:name/compress', 'POST'] as const
}

export function usePostInstancesIdAttachmentsNameCompress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['compress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesIdAttachmentsNameCompressKey()
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
            (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instances[':id'].attachments[':name'].compress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameCompressedDataKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function useGetInstancesIdAttachmentsNameCompressedData<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
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
        ? getGetInstancesIdAttachmentsNameCompressedDataKey(args)
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
                (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
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
          client.instances[':id'].attachments[':name']['compressed-data'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsNameCompressedData<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
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
        ? getGetInstancesIdAttachmentsNameCompressedDataKey(args)
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
                (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
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
          client.instances[':id'].attachments[':name']['compressed-data'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameCompressedMd5Key(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function useGetInstancesIdAttachmentsNameCompressedMd5<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
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
        ? getGetInstancesIdAttachmentsNameCompressedMd5Key(args)
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
                (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
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
          client.instances[':id'].attachments[':name']['compressed-md5'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsNameCompressedMd5<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
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
        ? getGetInstancesIdAttachmentsNameCompressedMd5Key(args)
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
                (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
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
          client.instances[':id'].attachments[':name']['compressed-md5'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameCompressedSizeKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function useGetInstancesIdAttachmentsNameCompressedSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
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
        ? getGetInstancesIdAttachmentsNameCompressedSizeKey(args)
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
                (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
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
          client.instances[':id'].attachments[':name']['compressed-size'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsNameCompressedSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
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
        ? getGetInstancesIdAttachmentsNameCompressedSizeKey(args)
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
                (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
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
          client.instances[':id'].attachments[':name']['compressed-size'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameDataKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/data', keyArgs] as const
}

export function useGetInstancesIdAttachmentsNameData<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
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
        ? getGetInstancesIdAttachmentsNameDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsNameData<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
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
        ? getGetInstancesIdAttachmentsNameDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameInfoKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/info', keyArgs] as const
}

export function useGetInstancesIdAttachmentsNameInfo<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
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
        ? getGetInstancesIdAttachmentsNameInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsNameInfo<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
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
        ? getGetInstancesIdAttachmentsNameInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameIsCompressedKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function useGetInstancesIdAttachmentsNameIsCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
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
        ? getGetInstancesIdAttachmentsNameIsCompressedKey(args)
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
                (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
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
          client.instances[':id'].attachments[':name']['is-compressed'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsNameIsCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
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
        ? getGetInstancesIdAttachmentsNameIsCompressedKey(args)
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
                (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
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
          client.instances[':id'].attachments[':name']['is-compressed'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameMd5Key(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/md5', keyArgs] as const
}

export function useGetInstancesIdAttachmentsNameMd5<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
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
        ? getGetInstancesIdAttachmentsNameMd5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].md5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsNameMd5<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
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
        ? getGetInstancesIdAttachmentsNameMd5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].md5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdAttachmentsNameSizeKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/size', keyArgs] as const
}

export function useGetInstancesIdAttachmentsNameSize<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
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
        ? getGetInstancesIdAttachmentsNameSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].size.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdAttachmentsNameSize<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
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
        ? getGetInstancesIdAttachmentsNameSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].attachments[':name'].size.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesIdAttachmentsNameUncompressKey() {
  return ['instances', '/instances/:id/attachments/:name/uncompress', 'POST'] as const
}

export function usePostInstancesIdAttachmentsNameUncompress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesIdAttachmentsNameUncompressKey()
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
            (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instances[':id'].attachments[':name'].uncompress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInstancesIdAttachmentsNameVerifyMd5Key() {
  return ['instances', '/instances/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function usePostInstancesIdAttachmentsNameVerifyMd5<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesIdAttachmentsNameVerifyMd5Key()
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
            (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instances[':id'].attachments[':name']['verify-md5'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesIdContentKey(
  args: InferRequestType<(typeof client.instances)[':id']['content']['$get']>,
) {
  return ['instances', '/instances/:id/content', args] as const
}

export function useGetInstancesIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
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
        ? getGetInstancesIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
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
        ? getGetInstancesIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesIdExportKey() {
  return ['instances', '/instances/:id/export', 'POST'] as const
}

export function usePostInstancesIdExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesIdExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instances)[':id']['export']['$post']> },
      ) => parseResponse(client.instances[':id'].export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesIdFileKey(
  args: InferRequestType<(typeof client.instances)[':id']['file']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/file', keyArgs] as const
}

export function useGetInstancesIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>
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
        ? getGetInstancesIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>
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
        ? getGetInstancesIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames']['$get']>,
) {
  return ['instances', '/instances/:id/frames', args] as const
}

export function useGetInstancesIdFrames<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
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
        ? getGetInstancesIdFramesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].frames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFrames<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
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
        ? getGetInstancesIdFramesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].frames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame', args] as const
}

export function useGetInstancesIdFramesFrame<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
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
        ? getGetInstancesIdFramesFrameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].frames[':frame'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrame<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
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
        ? getGetInstancesIdFramesFrameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].frames[':frame'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameImageInt16Key(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/image-int16', keyArgs] as const
}

export function useGetInstancesIdFramesFrameImageInt16<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
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
        ? getGetInstancesIdFramesFrameImageInt16Key(args)
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
                (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
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
          client.instances[':id'].frames[':frame']['image-int16'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrameImageInt16<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
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
        ? getGetInstancesIdFramesFrameImageInt16Key(args)
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
                (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
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
          client.instances[':id'].frames[':frame']['image-int16'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameImageUint16Key(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/image-uint16', keyArgs] as const
}

export function useGetInstancesIdFramesFrameImageUint16<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
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
        ? getGetInstancesIdFramesFrameImageUint16Key(args)
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
                (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
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
          client.instances[':id'].frames[':frame']['image-uint16'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrameImageUint16<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
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
        ? getGetInstancesIdFramesFrameImageUint16Key(args)
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
                (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
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
          client.instances[':id'].frames[':frame']['image-uint16'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameImageUint8Key(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/image-uint8', keyArgs] as const
}

export function useGetInstancesIdFramesFrameImageUint8<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
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
        ? getGetInstancesIdFramesFrameImageUint8Key(args)
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
                (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
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
          client.instances[':id'].frames[':frame']['image-uint8'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrameImageUint8<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
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
        ? getGetInstancesIdFramesFrameImageUint8Key(args)
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
                (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
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
          client.instances[':id'].frames[':frame']['image-uint8'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameMatlabKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame/matlab', args] as const
}

export function useGetInstancesIdFramesFrameMatlab<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
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
        ? getGetInstancesIdFramesFrameMatlabKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].matlab.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrameMatlab<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
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
        ? getGetInstancesIdFramesFrameMatlabKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].matlab.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameNumpyKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame/numpy', args] as const
}

export function useGetInstancesIdFramesFrameNumpy<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
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
        ? getGetInstancesIdFramesFrameNumpyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].numpy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrameNumpy<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
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
        ? getGetInstancesIdFramesFrameNumpyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].numpy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFramePreviewKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/preview', keyArgs] as const
}

export function useGetInstancesIdFramesFramePreview<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
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
        ? getGetInstancesIdFramesFramePreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFramePreview<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
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
        ? getGetInstancesIdFramesFramePreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameRawKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame/raw', args] as const
}

export function useGetInstancesIdFramesFrameRaw<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
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
        ? getGetInstancesIdFramesFrameRawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].raw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrameRaw<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
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
        ? getGetInstancesIdFramesFrameRawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].raw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameRawGzKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame/raw.gz', args] as const
}

export function useGetInstancesIdFramesFrameRawGz<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
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
        ? getGetInstancesIdFramesFrameRawGzKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame']['raw.gz'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrameRawGz<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
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
        ? getGetInstancesIdFramesFrameRawGzKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame']['raw.gz'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdFramesFrameRenderedKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/rendered', keyArgs] as const
}

export function useGetInstancesIdFramesFrameRendered<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
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
        ? getGetInstancesIdFramesFrameRenderedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].rendered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdFramesFrameRendered<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
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
        ? getGetInstancesIdFramesFrameRenderedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].frames[':frame'].rendered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdHeaderKey(
  args: InferRequestType<(typeof client.instances)[':id']['header']['$get']>,
) {
  return ['instances', '/instances/:id/header', args] as const
}

export function useGetInstancesIdHeader<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['header']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
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
        ? getGetInstancesIdHeaderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].header.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdHeader<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['header']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
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
        ? getGetInstancesIdHeaderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].header.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdImageInt16Key(
  args: InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/image-int16', keyArgs] as const
}

export function useGetInstancesIdImageInt16<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
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
        ? getGetInstancesIdImageInt16Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id']['image-int16'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdImageInt16<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
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
        ? getGetInstancesIdImageInt16Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id']['image-int16'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdImageUint16Key(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/image-uint16', keyArgs] as const
}

export function useGetInstancesIdImageUint16<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
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
        ? getGetInstancesIdImageUint16Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id']['image-uint16'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdImageUint16<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
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
        ? getGetInstancesIdImageUint16Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id']['image-uint16'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdImageUint8Key(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/image-uint8', keyArgs] as const
}

export function useGetInstancesIdImageUint8<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
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
        ? getGetInstancesIdImageUint8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id']['image-uint8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdImageUint8<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
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
        ? getGetInstancesIdImageUint8Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id']['image-uint8'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdMatlabKey(
  args: InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>,
) {
  return ['instances', '/instances/:id/matlab', args] as const
}

export function useGetInstancesIdMatlab<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
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
        ? getGetInstancesIdMatlabKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].matlab.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdMatlab<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
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
        ? getGetInstancesIdMatlabKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].matlab.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdMetadataKey(
  args: InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>,
) {
  return ['instances', '/instances/:id/metadata', args] as const
}

export function useGetInstancesIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
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
        ? getGetInstancesIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
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
        ? getGetInstancesIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdMetadataNameKey(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/metadata/:name', keyArgs] as const
}

export function useGetInstancesIdMetadataName<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
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
        ? getGetInstancesIdMetadataNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].metadata[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdMetadataName<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
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
        ? getGetInstancesIdMetadataNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id'].metadata[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInstancesIdMetadataNameKey() {
  return ['instances', '/instances/:id/metadata/:name', 'PUT'] as const
}

export function usePutInstancesIdMetadataName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInstancesIdMetadataNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']> },
      ) => parseResponse(client.instances[':id'].metadata[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstancesIdMetadataNameKey() {
  return ['instances', '/instances/:id/metadata/:name', 'DELETE'] as const
}

export function useDeleteInstancesIdMetadataName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstancesIdMetadataNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>
        },
      ) => parseResponse(client.instances[':id'].metadata[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstancesIdModifyKey() {
  return ['instances', '/instances/:id/modify', 'POST'] as const
}

export function usePostInstancesIdModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['modify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['modify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesIdModifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instances)[':id']['modify']['$post']> },
      ) => parseResponse(client.instances[':id'].modify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesIdModuleKey(
  args: InferRequestType<(typeof client.instances)[':id']['module']['$get']>,
) {
  return ['instances', '/instances/:id/module', args] as const
}

export function useGetInstancesIdModule<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['module']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
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
        ? getGetInstancesIdModuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].module.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdModule<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['module']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
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
        ? getGetInstancesIdModuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].module.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdNumpyKey(
  args: InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>,
) {
  return ['instances', '/instances/:id/numpy', args] as const
}

export function useGetInstancesIdNumpy<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>
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
        ? getGetInstancesIdNumpyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].numpy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdNumpy<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>
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
        ? getGetInstancesIdNumpyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].numpy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdPatientKey(
  args: InferRequestType<(typeof client.instances)[':id']['patient']['$get']>,
) {
  return ['instances', '/instances/:id/patient', args] as const
}

export function useGetInstancesIdPatient<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['patient']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
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
        ? getGetInstancesIdPatientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].patient.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdPatient<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['patient']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
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
        ? getGetInstancesIdPatientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].patient.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdPdfKey(
  args: InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>,
) {
  return ['instances', '/instances/:id/pdf', args] as const
}

export function useGetInstancesIdPdf<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstancesIdPdfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdPdf<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInstancesIdPdfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdPreviewKey(
  args: InferRequestType<(typeof client.instances)[':id']['preview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/preview', keyArgs] as const
}

export function useGetInstancesIdPreview<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
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
        ? getGetInstancesIdPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdPreview<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
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
        ? getGetInstancesIdPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesIdReconstructKey() {
  return ['instances', '/instances/:id/reconstruct', 'POST'] as const
}

export function usePostInstancesIdReconstruct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesIdReconstructKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']> },
      ) => parseResponse(client.instances[':id'].reconstruct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesIdRenderedKey(
  args: InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/rendered', keyArgs] as const
}

export function useGetInstancesIdRendered<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
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
        ? getGetInstancesIdRenderedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].rendered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdRendered<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
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
        ? getGetInstancesIdRenderedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].rendered.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdSeriesKey(
  args: InferRequestType<(typeof client.instances)[':id']['series']['$get']>,
) {
  return ['instances', '/instances/:id/series', args] as const
}

export function useGetInstancesIdSeries<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
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
        ? getGetInstancesIdSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdSeries<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
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
        ? getGetInstancesIdSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdSimplifiedTagsKey(
  args: InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>,
) {
  return ['instances', '/instances/:id/simplified-tags', args] as const
}

export function useGetInstancesIdSimplifiedTags<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
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
        ? getGetInstancesIdSimplifiedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id']['simplified-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdSimplifiedTags<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
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
        ? getGetInstancesIdSimplifiedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':id']['simplified-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdStatisticsKey(
  args: InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>,
) {
  return ['instances', '/instances/:id/statistics', args] as const
}

export function useGetInstancesIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
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
        ? getGetInstancesIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
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
        ? getGetInstancesIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdStudyKey(
  args: InferRequestType<(typeof client.instances)[':id']['study']['$get']>,
) {
  return ['instances', '/instances/:id/study', args] as const
}

export function useGetInstancesIdStudy<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['study']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>
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
        ? getGetInstancesIdStudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdStudy<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['study']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>
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
        ? getGetInstancesIdStudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesIdTagsKey(
  args: InferRequestType<(typeof client.instances)[':id']['tags']['$get']>,
) {
  return ['instances', '/instances/:id/tags', args] as const
}

export function useGetInstancesIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>
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
        ? getGetInstancesIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>
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
        ? getGetInstancesIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsKey(args: InferRequestType<typeof client.jobs.$get>) {
  return ['jobs', '/jobs', args] as const
}

export function useGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetJobsIdKey(args: InferRequestType<(typeof client.jobs)[':id']['$get']>) {
  return ['jobs', '/jobs/:id', args] as const
}

export function useGetJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobsIdCancelKey() {
  return ['jobs', '/jobs/:id/cancel', 'POST'] as const
}

export function usePostJobsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']> },
      ) => parseResponse(client.jobs[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobsIdPauseKey() {
  return ['jobs', '/jobs/:id/pause', 'POST'] as const
}

export function usePostJobsIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['pause']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':id']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':id']['pause']['$post']> },
      ) => parseResponse(client.jobs[':id'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobsIdResubmitKey() {
  return ['jobs', '/jobs/:id/resubmit', 'POST'] as const
}

export function usePostJobsIdResubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['resubmit']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsIdResubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']> },
      ) => parseResponse(client.jobs[':id'].resubmit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobsIdResumeKey() {
  return ['jobs', '/jobs/:id/resume', 'POST'] as const
}

export function usePostJobsIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['resume']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':id']['resume']['$post']> },
      ) => parseResponse(client.jobs[':id'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsIdKeyKey(
  args: InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>,
) {
  return ['jobs', '/jobs/:id/:key', args] as const
}

export function useGetJobsIdKey<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsIdKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':id'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsIdKey<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsIdKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':id'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetModalitiesKey(args: InferRequestType<typeof client.modalities.$get>) {
  return ['modalities', '/modalities', args] as const
}

export function useGetModalities<TError = unknown>(
  args: InferRequestType<typeof client.modalities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModalitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.modalities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModalities<TError = unknown>(
  args: InferRequestType<typeof client.modalities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModalitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.modalities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetModalitiesIdKey(
  args: InferRequestType<(typeof client.modalities)[':id']['$get']>,
) {
  return ['modalities', '/modalities/:id', args] as const
}

export function useGetModalitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.modalities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetModalitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.modalities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModalitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.modalities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetModalitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.modalities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutModalitiesIdKey() {
  return ['modalities', '/modalities/:id', 'PUT'] as const
}

export function usePutModalitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutModalitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.modalities)[':id']['$put']> },
      ) => parseResponse(client.modalities[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteModalitiesIdKey() {
  return ['modalities', '/modalities/:id', 'DELETE'] as const
}

export function useDeleteModalitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModalitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.modalities)[':id']['$delete']> },
      ) => parseResponse(client.modalities[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModalitiesIdConfigurationKey(
  args: InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>,
) {
  return ['modalities', '/modalities/:id/configuration', args] as const
}

export function useGetModalitiesIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
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
        ? getGetModalitiesIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.modalities[':id'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModalitiesIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
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
        ? getGetModalitiesIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.modalities[':id'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostModalitiesIdEchoKey() {
  return ['modalities', '/modalities/:id/echo', 'POST'] as const
}

export function usePostModalitiesIdEcho<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['echo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['echo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdEchoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.modalities)[':id']['echo']['$post']> },
      ) => parseResponse(client.modalities[':id'].echo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdFindKey() {
  return ['modalities', '/modalities/:id/find', 'POST'] as const
}

export function usePostModalitiesIdFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['find']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.modalities)[':id']['find']['$post']> },
      ) => parseResponse(client.modalities[':id'].find.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdFindInstanceKey() {
  return ['modalities', '/modalities/:id/find-instance', 'POST'] as const
}

export function usePostModalitiesIdFindInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-instance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdFindInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']> },
      ) => parseResponse(client.modalities[':id']['find-instance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdFindPatientKey() {
  return ['modalities', '/modalities/:id/find-patient', 'POST'] as const
}

export function usePostModalitiesIdFindPatient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-patient']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdFindPatientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']> },
      ) => parseResponse(client.modalities[':id']['find-patient'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdFindSeriesKey() {
  return ['modalities', '/modalities/:id/find-series', 'POST'] as const
}

export function usePostModalitiesIdFindSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-series']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdFindSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']> },
      ) => parseResponse(client.modalities[':id']['find-series'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdFindStudyKey() {
  return ['modalities', '/modalities/:id/find-study', 'POST'] as const
}

export function usePostModalitiesIdFindStudy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-study']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdFindStudyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']> },
      ) => parseResponse(client.modalities[':id']['find-study'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdFindWorklistKey() {
  return ['modalities', '/modalities/:id/find-worklist', 'POST'] as const
}

export function usePostModalitiesIdFindWorklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-worklist']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdFindWorklistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']> },
      ) => parseResponse(client.modalities[':id']['find-worklist'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdMoveKey() {
  return ['modalities', '/modalities/:id/move', 'POST'] as const
}

export function usePostModalitiesIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['move']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.modalities)[':id']['move']['$post']> },
      ) => parseResponse(client.modalities[':id'].move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdQueryKey() {
  return ['modalities', '/modalities/:id/query', 'POST'] as const
}

export function usePostModalitiesIdQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.modalities)[':id']['query']['$post']> },
      ) => parseResponse(client.modalities[':id'].query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdStorageCommitmentKey() {
  return ['modalities', '/modalities/:id/storage-commitment', 'POST'] as const
}

export function usePostModalitiesIdStorageCommitment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['storage-commitment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdStorageCommitmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>
        },
      ) => parseResponse(client.modalities[':id']['storage-commitment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdStoreKey() {
  return ['modalities', '/modalities/:id/store', 'POST'] as const
}

export function usePostModalitiesIdStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['store']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['store']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdStoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.modalities)[':id']['store']['$post']> },
      ) => parseResponse(client.modalities[':id'].store.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModalitiesIdStoreStraightKey() {
  return ['modalities', '/modalities/:id/store-straight', 'POST'] as const
}

export function usePostModalitiesIdStoreStraight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['store-straight']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModalitiesIdStoreStraightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']> },
      ) => parseResponse(client.modalities[':id']['store-straight'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPatientsKey(args: InferRequestType<typeof client.patients.$get>) {
  return ['patients', '/patients', args] as const
}

export function useGetPatients<TError = unknown>(
  args: InferRequestType<typeof client.patients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPatientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.patients.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPatients<TError = unknown>(
  args: InferRequestType<typeof client.patients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPatientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.patients.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPatientsIdKey(
  args: InferRequestType<(typeof client.patients)[':id']['$get']>,
) {
  return ['patients', '/patients/:id', args] as const
}

export function useGetPatientsId<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPatientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsId<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPatientsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePatientsIdKey() {
  return ['patients', '/patients/:id', 'DELETE'] as const
}

export function useDeletePatientsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePatientsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.patients)[':id']['$delete']> },
      ) => parseResponse(client.patients[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPatientsIdAnonymizeKey() {
  return ['patients', '/patients/:id/anonymize', 'POST'] as const
}

export function usePostPatientsIdAnonymize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientsIdAnonymizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']> },
      ) => parseResponse(client.patients[':id'].anonymize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPatientsIdArchiveKey(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$get']>,
) {
  return ['patients', '/patients/:id/archive', args] as const
}

export function useGetPatientsIdArchive<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
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
        ? getGetPatientsIdArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdArchive<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
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
        ? getGetPatientsIdArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPatientsIdArchiveKey() {
  return ['patients', '/patients/:id/archive', 'POST'] as const
}

export function usePostPatientsIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientsIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.patients)[':id']['archive']['$post']> },
      ) => parseResponse(client.patients[':id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>,
) {
  return ['patients', '/patients/:id/attachments', args] as const
}

export function useGetPatientsIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
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
        ? getGetPatientsIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
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
        ? getGetPatientsIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name', keyArgs] as const
}

export function useGetPatientsIdAttachmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
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
        ? getGetPatientsIdAttachmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
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
        ? getGetPatientsIdAttachmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPatientsIdAttachmentsNameKey() {
  return ['patients', '/patients/:id/attachments/:name', 'PUT'] as const
}

export function usePutPatientsIdAttachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPatientsIdAttachmentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>
        },
      ) => parseResponse(client.patients[':id'].attachments[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePatientsIdAttachmentsNameKey() {
  return ['patients', '/patients/:id/attachments/:name', 'DELETE'] as const
}

export function useDeletePatientsIdAttachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePatientsIdAttachmentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>
        },
      ) => parseResponse(client.patients[':id'].attachments[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPatientsIdAttachmentsNameCompressKey() {
  return ['patients', '/patients/:id/attachments/:name/compress', 'POST'] as const
}

export function usePostPatientsIdAttachmentsNameCompress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['compress']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['compress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientsIdAttachmentsNameCompressKey()
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
            (typeof client.patients)[':id']['attachments'][':name']['compress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.patients[':id'].attachments[':name'].compress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameCompressedDataKey(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function useGetPatientsIdAttachmentsNameCompressedData<TError = unknown>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
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
        ? getGetPatientsIdAttachmentsNameCompressedDataKey(args)
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
                (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
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
          client.patients[':id'].attachments[':name']['compressed-data'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsNameCompressedData<TError = unknown>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
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
        ? getGetPatientsIdAttachmentsNameCompressedDataKey(args)
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
                (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
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
          client.patients[':id'].attachments[':name']['compressed-data'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameCompressedMd5Key(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function useGetPatientsIdAttachmentsNameCompressedMd5<TError = unknown>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
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
        ? getGetPatientsIdAttachmentsNameCompressedMd5Key(args)
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
                (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
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
          client.patients[':id'].attachments[':name']['compressed-md5'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsNameCompressedMd5<TError = unknown>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
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
        ? getGetPatientsIdAttachmentsNameCompressedMd5Key(args)
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
                (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
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
          client.patients[':id'].attachments[':name']['compressed-md5'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameCompressedSizeKey(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function useGetPatientsIdAttachmentsNameCompressedSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
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
        ? getGetPatientsIdAttachmentsNameCompressedSizeKey(args)
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
                (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
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
          client.patients[':id'].attachments[':name']['compressed-size'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsNameCompressedSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
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
        ? getGetPatientsIdAttachmentsNameCompressedSizeKey(args)
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
                (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
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
          client.patients[':id'].attachments[':name']['compressed-size'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameDataKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/data', keyArgs] as const
}

export function useGetPatientsIdAttachmentsNameData<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
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
        ? getGetPatientsIdAttachmentsNameDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsNameData<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
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
        ? getGetPatientsIdAttachmentsNameDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameInfoKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/info', keyArgs] as const
}

export function useGetPatientsIdAttachmentsNameInfo<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
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
        ? getGetPatientsIdAttachmentsNameInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsNameInfo<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
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
        ? getGetPatientsIdAttachmentsNameInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameIsCompressedKey(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function useGetPatientsIdAttachmentsNameIsCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
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
        ? getGetPatientsIdAttachmentsNameIsCompressedKey(args)
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
                (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
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
          client.patients[':id'].attachments[':name']['is-compressed'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsNameIsCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
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
        ? getGetPatientsIdAttachmentsNameIsCompressedKey(args)
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
                (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
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
          client.patients[':id'].attachments[':name']['is-compressed'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameMd5Key(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/md5', keyArgs] as const
}

export function useGetPatientsIdAttachmentsNameMd5<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
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
        ? getGetPatientsIdAttachmentsNameMd5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].md5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsNameMd5<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
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
        ? getGetPatientsIdAttachmentsNameMd5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].md5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdAttachmentsNameSizeKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/size', keyArgs] as const
}

export function useGetPatientsIdAttachmentsNameSize<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
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
        ? getGetPatientsIdAttachmentsNameSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].size.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdAttachmentsNameSize<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
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
        ? getGetPatientsIdAttachmentsNameSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patients[':id'].attachments[':name'].size.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPatientsIdAttachmentsNameUncompressKey() {
  return ['patients', '/patients/:id/attachments/:name/uncompress', 'POST'] as const
}

export function usePostPatientsIdAttachmentsNameUncompress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientsIdAttachmentsNameUncompressKey()
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
            (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.patients[':id'].attachments[':name'].uncompress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPatientsIdAttachmentsNameVerifyMd5Key() {
  return ['patients', '/patients/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function usePostPatientsIdAttachmentsNameVerifyMd5<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientsIdAttachmentsNameVerifyMd5Key()
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
            (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
          >
        },
      ) =>
        parseResponse(
          client.patients[':id'].attachments[':name']['verify-md5'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPatientsIdInstancesKey(
  args: InferRequestType<(typeof client.patients)[':id']['instances']['$get']>,
) {
  return ['patients', '/patients/:id/instances', args] as const
}

export function useGetPatientsIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
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
        ? getGetPatientsIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
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
        ? getGetPatientsIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdInstancesTagsKey(
  args: InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>,
) {
  return ['patients', '/patients/:id/instances-tags', args] as const
}

export function useGetPatientsIdInstancesTags<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
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
        ? getGetPatientsIdInstancesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id']['instances-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdInstancesTags<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
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
        ? getGetPatientsIdInstancesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id']['instances-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdMediaKey(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$get']>,
) {
  return ['patients', '/patients/:id/media', args] as const
}

export function useGetPatientsIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>
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
        ? getGetPatientsIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>
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
        ? getGetPatientsIdMediaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPatientsIdMediaKey() {
  return ['patients', '/patients/:id/media', 'POST'] as const
}

export function usePostPatientsIdMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['media']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientsIdMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.patients)[':id']['media']['$post']> },
      ) => parseResponse(client.patients[':id'].media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPatientsIdMetadataKey(
  args: InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>,
) {
  return ['patients', '/patients/:id/metadata', args] as const
}

export function useGetPatientsIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
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
        ? getGetPatientsIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
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
        ? getGetPatientsIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdMetadataNameKey(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/metadata/:name', keyArgs] as const
}

export function useGetPatientsIdMetadataName<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
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
        ? getGetPatientsIdMetadataNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].metadata[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdMetadataName<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
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
        ? getGetPatientsIdMetadataNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].metadata[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPatientsIdMetadataNameKey() {
  return ['patients', '/patients/:id/metadata/:name', 'PUT'] as const
}

export function usePutPatientsIdMetadataName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPatientsIdMetadataNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']> },
      ) => parseResponse(client.patients[':id'].metadata[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePatientsIdMetadataNameKey() {
  return ['patients', '/patients/:id/metadata/:name', 'DELETE'] as const
}

export function useDeletePatientsIdMetadataName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePatientsIdMetadataNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>
        },
      ) => parseResponse(client.patients[':id'].metadata[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPatientsIdModifyKey() {
  return ['patients', '/patients/:id/modify', 'POST'] as const
}

export function usePostPatientsIdModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['modify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['modify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientsIdModifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.patients)[':id']['modify']['$post']> },
      ) => parseResponse(client.patients[':id'].modify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPatientsIdModuleKey(
  args: InferRequestType<(typeof client.patients)[':id']['module']['$get']>,
) {
  return ['patients', '/patients/:id/module', args] as const
}

export function useGetPatientsIdModule<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['module']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>
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
        ? getGetPatientsIdModuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].module.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdModule<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['module']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>
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
        ? getGetPatientsIdModuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].module.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdProtectedKey(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$get']>,
) {
  return ['patients', '/patients/:id/protected', args] as const
}

export function useGetPatientsIdProtected<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
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
        ? getGetPatientsIdProtectedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].protected.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdProtected<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
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
        ? getGetPatientsIdProtectedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].protected.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPatientsIdProtectedKey() {
  return ['patients', '/patients/:id/protected', 'PUT'] as const
}

export function usePutPatientsIdProtected<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['protected']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPatientsIdProtectedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.patients)[':id']['protected']['$put']> },
      ) => parseResponse(client.patients[':id'].protected.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPatientsIdReconstructKey() {
  return ['patients', '/patients/:id/reconstruct', 'POST'] as const
}

export function usePostPatientsIdReconstruct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientsIdReconstructKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']> },
      ) => parseResponse(client.patients[':id'].reconstruct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPatientsIdSeriesKey(
  args: InferRequestType<(typeof client.patients)[':id']['series']['$get']>,
) {
  return ['patients', '/patients/:id/series', args] as const
}

export function useGetPatientsIdSeries<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>
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
        ? getGetPatientsIdSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdSeries<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>
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
        ? getGetPatientsIdSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdSharedTagsKey(
  args: InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>,
) {
  return ['patients', '/patients/:id/shared-tags', args] as const
}

export function useGetPatientsIdSharedTags<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
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
        ? getGetPatientsIdSharedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id']['shared-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdSharedTags<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
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
        ? getGetPatientsIdSharedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id']['shared-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdStatisticsKey(
  args: InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>,
) {
  return ['patients', '/patients/:id/statistics', args] as const
}

export function useGetPatientsIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
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
        ? getGetPatientsIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
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
        ? getGetPatientsIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientsIdStudiesKey(
  args: InferRequestType<(typeof client.patients)[':id']['studies']['$get']>,
) {
  return ['patients', '/patients/:id/studies', args] as const
}

export function useGetPatientsIdStudies<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['studies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
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
        ? getGetPatientsIdStudiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].studies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientsIdStudies<TError = unknown>(
  args: InferRequestType<(typeof client.patients)[':id']['studies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
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
        ? getGetPatientsIdStudiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patients[':id'].studies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPeersKey(args: InferRequestType<typeof client.peers.$get>) {
  return ['peers', '/peers', args] as const
}

export function useGetPeers<TError = unknown>(
  args: InferRequestType<typeof client.peers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.peers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPeers<TError = unknown>(
  args: InferRequestType<typeof client.peers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.peers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPeersIdKey(args: InferRequestType<(typeof client.peers)[':id']['$get']>) {
  return ['peers', '/peers/:id', args] as const
}

export function useGetPeersId<TError = unknown>(
  args: InferRequestType<(typeof client.peers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.peers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeersId<TError = unknown>(
  args: InferRequestType<(typeof client.peers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.peers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPeersIdKey() {
  return ['peers', '/peers/:id', 'PUT'] as const
}

export function usePutPeersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.peers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPeersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.peers)[':id']['$put']> }) =>
        parseResponse(client.peers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePeersIdKey() {
  return ['peers', '/peers/:id', 'DELETE'] as const
}

export function useDeletePeersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.peers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePeersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.peers)[':id']['$delete']> }) =>
        parseResponse(client.peers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPeersIdConfigurationKey(
  args: InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>,
) {
  return ['peers', '/peers/:id/configuration', args] as const
}

export function useGetPeersIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
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
        ? getGetPeersIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.peers[':id'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeersIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
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
        ? getGetPeersIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.peers[':id'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPeersIdStoreKey() {
  return ['peers', '/peers/:id/store', 'POST'] as const
}

export function usePostPeersIdStore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['store']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.peers)[':id']['store']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPeersIdStoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.peers)[':id']['store']['$post']> },
      ) => parseResponse(client.peers[':id'].store.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPeersIdStoreStraightKey() {
  return ['peers', '/peers/:id/store-straight', 'POST'] as const
}

export function usePostPeersIdStoreStraight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.peers)[':id']['store-straight']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPeersIdStoreStraightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']> },
      ) => parseResponse(client.peers[':id']['store-straight'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPeersIdSystemKey(
  args: InferRequestType<(typeof client.peers)[':id']['system']['$get']>,
) {
  return ['peers', '/peers/:id/system', args] as const
}

export function useGetPeersIdSystem<TError = unknown>(
  args: InferRequestType<(typeof client.peers)[':id']['system']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPeersIdSystemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.peers[':id'].system.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeersIdSystem<TError = unknown>(
  args: InferRequestType<(typeof client.peers)[':id']['system']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPeersIdSystemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.peers[':id'].system.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPluginsKey() {
  return ['plugins', '/plugins'] as const
}

export function useGetPlugins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlugins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPluginsExplorerJsKey() {
  return ['plugins', '/plugins/explorer.js'] as const
}

export function useGetPluginsExplorerJs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsExplorerJsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins['explorer.js'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginsExplorerJs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsExplorerJsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins['explorer.js'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPluginsIdKey(args: InferRequestType<(typeof client.plugins)[':id']['$get']>) {
  return ['plugins', '/plugins/:id', args] as const
}

export function useGetPluginsId<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPluginsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginsId<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPluginsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueriesKey() {
  return ['queries', '/queries'] as const
}

export function useGetQueries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueriesIdKey(args: InferRequestType<(typeof client.queries)[':id']['$get']>) {
  return ['queries', '/queries/:id', args] as const
}

export function useGetQueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQueriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQueriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteQueriesIdKey() {
  return ['queries', '/queries/:id', 'DELETE'] as const
}

export function useDeleteQueriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.queries)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQueriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.queries)[':id']['$delete']> },
      ) => parseResponse(client.queries[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueriesIdAnswersKey(
  args: InferRequestType<(typeof client.queries)[':id']['answers']['$get']>,
) {
  return ['queries', '/queries/:id/answers', args] as const
}

export function useGetQueriesIdAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>
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
        ? getGetQueriesIdAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesIdAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>
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
        ? getGetQueriesIdAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueriesIdAnswersIndexKey(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>,
) {
  return ['queries', '/queries/:id/answers/:index', args] as const
}

export function useGetQueriesIdAnswersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
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
        ? getGetQueriesIdAnswersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].answers[':index'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesIdAnswersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
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
        ? getGetQueriesIdAnswersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].answers[':index'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueriesIdAnswersIndexContentKey(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>,
) {
  return ['queries', '/queries/:id/answers/:index/content', args] as const
}

export function useGetQueriesIdAnswersIndexContent<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
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
        ? getGetQueriesIdAnswersIndexContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.queries[':id'].answers[':index'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesIdAnswersIndexContent<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
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
        ? getGetQueriesIdAnswersIndexContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.queries[':id'].answers[':index'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueriesIdAnswersIndexQueryInstancesKey() {
  return ['queries', '/queries/:id/answers/:index/query-instances', 'POST'] as const
}

export function usePostQueriesIdAnswersIndexQueryInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueriesIdAnswersIndexQueryInstancesKey()
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
            (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
          >
        },
      ) =>
        parseResponse(
          client.queries[':id'].answers[':index']['query-instances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueriesIdAnswersIndexQuerySeriesKey() {
  return ['queries', '/queries/:id/answers/:index/query-series', 'POST'] as const
}

export function usePostQueriesIdAnswersIndexQuerySeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queries)[':id']['answers'][':index']['query-series']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['query-series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueriesIdAnswersIndexQuerySeriesKey()
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
            (typeof client.queries)[':id']['answers'][':index']['query-series']['$post']
          >
        },
      ) =>
        parseResponse(
          client.queries[':id'].answers[':index']['query-series'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueriesIdAnswersIndexQueryStudiesKey() {
  return ['queries', '/queries/:id/answers/:index/query-studies', 'POST'] as const
}

export function usePostQueriesIdAnswersIndexQueryStudies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueriesIdAnswersIndexQueryStudiesKey()
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
            (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.queries[':id'].answers[':index']['query-studies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostQueriesIdAnswersIndexRetrieveKey() {
  return ['queries', '/queries/:id/answers/:index/retrieve', 'POST'] as const
}

export function usePostQueriesIdAnswersIndexRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueriesIdAnswersIndexRetrieveKey()
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
            (typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']
          >
        },
      ) =>
        parseResponse(client.queries[':id'].answers[':index'].retrieve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueriesIdLevelKey(
  args: InferRequestType<(typeof client.queries)[':id']['level']['$get']>,
) {
  return ['queries', '/queries/:id/level', args] as const
}

export function useGetQueriesIdLevel<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['level']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQueriesIdLevelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].level.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesIdLevel<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['level']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQueriesIdLevelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].level.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueriesIdModalityKey(
  args: InferRequestType<(typeof client.queries)[':id']['modality']['$get']>,
) {
  return ['queries', '/queries/:id/modality', args] as const
}

export function useGetQueriesIdModality<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['modality']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
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
        ? getGetQueriesIdModalityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].modality.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesIdModality<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['modality']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
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
        ? getGetQueriesIdModalityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].modality.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueriesIdQueryKey(
  args: InferRequestType<(typeof client.queries)[':id']['query']['$get']>,
) {
  return ['queries', '/queries/:id/query', args] as const
}

export function useGetQueriesIdQuery<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQueriesIdQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesIdQuery<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':id']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetQueriesIdQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':id'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueriesIdRetrieveKey() {
  return ['queries', '/queries/:id/retrieve', 'POST'] as const
}

export function usePostQueriesIdRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queries)[':id']['retrieve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueriesIdRetrieveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']> },
      ) => parseResponse(client.queries[':id'].retrieve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function useGetSeries<TError = unknown>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.series.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSeries<TError = unknown>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.series.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSeriesIdKey(args: InferRequestType<(typeof client.series)[':id']['$get']>) {
  return ['series', '/series/:id', args] as const
}

export function useGetSeriesId<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesId<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSeriesIdKey() {
  return ['series', '/series/:id', 'DELETE'] as const
}

export function useDeleteSeriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSeriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.series)[':id']['$delete']> },
      ) => parseResponse(client.series[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSeriesIdAnonymizeKey() {
  return ['series', '/series/:id/anonymize', 'POST'] as const
}

export function usePostSeriesIdAnonymize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['anonymize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesIdAnonymizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.series)[':id']['anonymize']['$post']> },
      ) => parseResponse(client.series[':id'].anonymize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesIdArchiveKey(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$get']>,
) {
  return ['series', '/series/:id/archive', args] as const
}

export function useGetSeriesIdArchive<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>
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
        ? getGetSeriesIdArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdArchive<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>
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
        ? getGetSeriesIdArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSeriesIdArchiveKey() {
  return ['series', '/series/:id/archive', 'POST'] as const
}

export function usePostSeriesIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.series)[':id']['archive']['$post']> },
      ) => parseResponse(client.series[':id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments']['$get']>,
) {
  return ['series', '/series/:id/attachments', args] as const
}

export function useGetSeriesIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
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
        ? getGetSeriesIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
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
        ? getGetSeriesIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name', keyArgs] as const
}

export function useGetSeriesIdAttachmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
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
        ? getGetSeriesIdAttachmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
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
        ? getGetSeriesIdAttachmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSeriesIdAttachmentsNameKey() {
  return ['series', '/series/:id/attachments/:name', 'PUT'] as const
}

export function usePutSeriesIdAttachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSeriesIdAttachmentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']> },
      ) => parseResponse(client.series[':id'].attachments[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSeriesIdAttachmentsNameKey() {
  return ['series', '/series/:id/attachments/:name', 'DELETE'] as const
}

export function useDeleteSeriesIdAttachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSeriesIdAttachmentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>
        },
      ) => parseResponse(client.series[':id'].attachments[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSeriesIdAttachmentsNameCompressKey() {
  return ['series', '/series/:id/attachments/:name/compress', 'POST'] as const
}

export function usePostSeriesIdAttachmentsNameCompress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':id']['attachments'][':name']['compress']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['compress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesIdAttachmentsNameCompressKey()
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
            (typeof client.series)[':id']['attachments'][':name']['compress']['$post']
          >
        },
      ) =>
        parseResponse(client.series[':id'].attachments[':name'].compress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameCompressedDataKey(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function useGetSeriesIdAttachmentsNameCompressedData<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
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
        ? getGetSeriesIdAttachmentsNameCompressedDataKey(args)
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
                (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
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
          client.series[':id'].attachments[':name']['compressed-data'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsNameCompressedData<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
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
        ? getGetSeriesIdAttachmentsNameCompressedDataKey(args)
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
                (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
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
          client.series[':id'].attachments[':name']['compressed-data'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameCompressedMd5Key(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function useGetSeriesIdAttachmentsNameCompressedMd5<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
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
        ? getGetSeriesIdAttachmentsNameCompressedMd5Key(args)
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
                (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
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
          client.series[':id'].attachments[':name']['compressed-md5'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsNameCompressedMd5<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
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
        ? getGetSeriesIdAttachmentsNameCompressedMd5Key(args)
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
                (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
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
          client.series[':id'].attachments[':name']['compressed-md5'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameCompressedSizeKey(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function useGetSeriesIdAttachmentsNameCompressedSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
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
        ? getGetSeriesIdAttachmentsNameCompressedSizeKey(args)
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
                (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
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
          client.series[':id'].attachments[':name']['compressed-size'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsNameCompressedSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
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
        ? getGetSeriesIdAttachmentsNameCompressedSizeKey(args)
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
                (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
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
          client.series[':id'].attachments[':name']['compressed-size'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameDataKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/data', keyArgs] as const
}

export function useGetSeriesIdAttachmentsNameData<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
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
        ? getGetSeriesIdAttachmentsNameDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsNameData<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
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
        ? getGetSeriesIdAttachmentsNameDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameInfoKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/info', keyArgs] as const
}

export function useGetSeriesIdAttachmentsNameInfo<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
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
        ? getGetSeriesIdAttachmentsNameInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsNameInfo<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
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
        ? getGetSeriesIdAttachmentsNameInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameIsCompressedKey(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function useGetSeriesIdAttachmentsNameIsCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
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
        ? getGetSeriesIdAttachmentsNameIsCompressedKey(args)
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
                (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
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
          client.series[':id'].attachments[':name']['is-compressed'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsNameIsCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
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
        ? getGetSeriesIdAttachmentsNameIsCompressedKey(args)
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
                (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
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
          client.series[':id'].attachments[':name']['is-compressed'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameMd5Key(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/md5', keyArgs] as const
}

export function useGetSeriesIdAttachmentsNameMd5<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
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
        ? getGetSeriesIdAttachmentsNameMd5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].md5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsNameMd5<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
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
        ? getGetSeriesIdAttachmentsNameMd5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].md5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdAttachmentsNameSizeKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/size', keyArgs] as const
}

export function useGetSeriesIdAttachmentsNameSize<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
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
        ? getGetSeriesIdAttachmentsNameSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].size.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdAttachmentsNameSize<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
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
        ? getGetSeriesIdAttachmentsNameSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.series[':id'].attachments[':name'].size.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSeriesIdAttachmentsNameUncompressKey() {
  return ['series', '/series/:id/attachments/:name/uncompress', 'POST'] as const
}

export function usePostSeriesIdAttachmentsNameUncompress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesIdAttachmentsNameUncompressKey()
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
            (typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.series[':id'].attachments[':name'].uncompress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSeriesIdAttachmentsNameVerifyMd5Key() {
  return ['series', '/series/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function usePostSeriesIdAttachmentsNameVerifyMd5<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesIdAttachmentsNameVerifyMd5Key()
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
            (typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']
          >
        },
      ) =>
        parseResponse(
          client.series[':id'].attachments[':name']['verify-md5'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesIdInstancesKey(
  args: InferRequestType<(typeof client.series)[':id']['instances']['$get']>,
) {
  return ['series', '/series/:id/instances', args] as const
}

export function useGetSeriesIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
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
        ? getGetSeriesIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
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
        ? getGetSeriesIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdInstancesTagsKey(
  args: InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>,
) {
  return ['series', '/series/:id/instances-tags', args] as const
}

export function useGetSeriesIdInstancesTags<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
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
        ? getGetSeriesIdInstancesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id']['instances-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdInstancesTags<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
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
        ? getGetSeriesIdInstancesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id']['instances-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdMediaKey(
  args: InferRequestType<(typeof client.series)[':id']['media']['$get']>,
) {
  return ['series', '/series/:id/media', args] as const
}

export function useGetSeriesIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSeriesIdMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSeriesIdMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSeriesIdMediaKey() {
  return ['series', '/series/:id/media', 'POST'] as const
}

export function usePostSeriesIdMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['media']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesIdMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.series)[':id']['media']['$post']> },
      ) => parseResponse(client.series[':id'].media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesIdMetadataKey(
  args: InferRequestType<(typeof client.series)[':id']['metadata']['$get']>,
) {
  return ['series', '/series/:id/metadata', args] as const
}

export function useGetSeriesIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>
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
        ? getGetSeriesIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>
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
        ? getGetSeriesIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdMetadataNameKey(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/metadata/:name', keyArgs] as const
}

export function useGetSeriesIdMetadataName<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
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
        ? getGetSeriesIdMetadataNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].metadata[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdMetadataName<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
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
        ? getGetSeriesIdMetadataNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].metadata[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSeriesIdMetadataNameKey() {
  return ['series', '/series/:id/metadata/:name', 'PUT'] as const
}

export function usePutSeriesIdMetadataName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSeriesIdMetadataNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']> },
      ) => parseResponse(client.series[':id'].metadata[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSeriesIdMetadataNameKey() {
  return ['series', '/series/:id/metadata/:name', 'DELETE'] as const
}

export function useDeleteSeriesIdMetadataName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSeriesIdMetadataNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']> },
      ) => parseResponse(client.series[':id'].metadata[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSeriesIdModifyKey() {
  return ['series', '/series/:id/modify', 'POST'] as const
}

export function usePostSeriesIdModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['modify']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['modify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesIdModifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.series)[':id']['modify']['$post']> },
      ) => parseResponse(client.series[':id'].modify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesIdModuleKey(
  args: InferRequestType<(typeof client.series)[':id']['module']['$get']>,
) {
  return ['series', '/series/:id/module', args] as const
}

export function useGetSeriesIdModule<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['module']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSeriesIdModuleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].module.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdModule<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['module']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSeriesIdModuleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].module.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdNumpyKey(
  args: InferRequestType<(typeof client.series)[':id']['numpy']['$get']>,
) {
  return ['series', '/series/:id/numpy', args] as const
}

export function useGetSeriesIdNumpy<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['numpy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSeriesIdNumpyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].numpy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdNumpy<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['numpy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSeriesIdNumpyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].numpy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdOrderedSlicesKey(
  args: InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>,
) {
  return ['series', '/series/:id/ordered-slices', args] as const
}

export function useGetSeriesIdOrderedSlices<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
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
        ? getGetSeriesIdOrderedSlicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id']['ordered-slices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdOrderedSlices<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
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
        ? getGetSeriesIdOrderedSlicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id']['ordered-slices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdPatientKey(
  args: InferRequestType<(typeof client.series)[':id']['patient']['$get']>,
) {
  return ['series', '/series/:id/patient', args] as const
}

export function useGetSeriesIdPatient<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['patient']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>
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
        ? getGetSeriesIdPatientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].patient.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdPatient<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['patient']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>
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
        ? getGetSeriesIdPatientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].patient.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSeriesIdReconstructKey() {
  return ['series', '/series/:id/reconstruct', 'POST'] as const
}

export function usePostSeriesIdReconstruct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesIdReconstructKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']> },
      ) => parseResponse(client.series[':id'].reconstruct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesIdSharedTagsKey(
  args: InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>,
) {
  return ['series', '/series/:id/shared-tags', args] as const
}

export function useGetSeriesIdSharedTags<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
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
        ? getGetSeriesIdSharedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id']['shared-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdSharedTags<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
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
        ? getGetSeriesIdSharedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id']['shared-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdStatisticsKey(
  args: InferRequestType<(typeof client.series)[':id']['statistics']['$get']>,
) {
  return ['series', '/series/:id/statistics', args] as const
}

export function useGetSeriesIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
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
        ? getGetSeriesIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
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
        ? getGetSeriesIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSeriesIdStudyKey(
  args: InferRequestType<(typeof client.series)[':id']['study']['$get']>,
) {
  return ['series', '/series/:id/study', args] as const
}

export function useGetSeriesIdStudy<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['study']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSeriesIdStudyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesIdStudy<TError = unknown>(
  args: InferRequestType<(typeof client.series)[':id']['study']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSeriesIdStudyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series[':id'].study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatisticsKey() {
  return ['statistics', '/statistics'] as const
}

export function useGetStatistics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatisticsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatistics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatisticsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStorageCommitmentIdKey(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>,
) {
  return ['storage-commitment', '/storage-commitment/:id', args] as const
}

export function useGetStorageCommitmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
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
        ? getGetStorageCommitmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['storage-commitment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageCommitmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
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
        ? getGetStorageCommitmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['storage-commitment'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStorageCommitmentIdRemoveKey() {
  return ['storage-commitment', '/storage-commitment/:id/remove', 'POST'] as const
}

export function usePostStorageCommitmentIdRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStorageCommitmentIdRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>
        },
      ) => parseResponse(client['storage-commitment'][':id'].remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesKey(args: InferRequestType<typeof client.studies.$get>) {
  return ['studies', '/studies', args] as const
}

export function useGetStudies<TError = unknown>(
  args: InferRequestType<typeof client.studies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStudiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.studies.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStudies<TError = unknown>(
  args: InferRequestType<typeof client.studies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStudiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.studies.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStudiesIdKey(args: InferRequestType<(typeof client.studies)[':id']['$get']>) {
  return ['studies', '/studies/:id', args] as const
}

export function useGetStudiesId<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStudiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesId<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStudiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteStudiesIdKey() {
  return ['studies', '/studies/:id', 'DELETE'] as const
}

export function useDeleteStudiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStudiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.studies)[':id']['$delete']> },
      ) => parseResponse(client.studies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStudiesIdAnonymizeKey() {
  return ['studies', '/studies/:id/anonymize', 'POST'] as const
}

export function usePostStudiesIdAnonymize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdAnonymizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']> },
      ) => parseResponse(client.studies[':id'].anonymize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesIdArchiveKey(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$get']>,
) {
  return ['studies', '/studies/:id/archive', args] as const
}

export function useGetStudiesIdArchive<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>
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
        ? getGetStudiesIdArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdArchive<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>
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
        ? getGetStudiesIdArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStudiesIdArchiveKey() {
  return ['studies', '/studies/:id/archive', 'POST'] as const
}

export function usePostStudiesIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.studies)[':id']['archive']['$post']> },
      ) => parseResponse(client.studies[':id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>,
) {
  return ['studies', '/studies/:id/attachments', args] as const
}

export function useGetStudiesIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
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
        ? getGetStudiesIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
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
        ? getGetStudiesIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name', keyArgs] as const
}

export function useGetStudiesIdAttachmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
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
        ? getGetStudiesIdAttachmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
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
        ? getGetStudiesIdAttachmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStudiesIdAttachmentsNameKey() {
  return ['studies', '/studies/:id/attachments/:name', 'PUT'] as const
}

export function usePutStudiesIdAttachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStudiesIdAttachmentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>
        },
      ) => parseResponse(client.studies[':id'].attachments[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStudiesIdAttachmentsNameKey() {
  return ['studies', '/studies/:id/attachments/:name', 'DELETE'] as const
}

export function useDeleteStudiesIdAttachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStudiesIdAttachmentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>
        },
      ) => parseResponse(client.studies[':id'].attachments[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStudiesIdAttachmentsNameCompressKey() {
  return ['studies', '/studies/:id/attachments/:name/compress', 'POST'] as const
}

export function usePostStudiesIdAttachmentsNameCompress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.studies)[':id']['attachments'][':name']['compress']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['compress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdAttachmentsNameCompressKey()
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
            (typeof client.studies)[':id']['attachments'][':name']['compress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.studies[':id'].attachments[':name'].compress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameCompressedDataKey(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function useGetStudiesIdAttachmentsNameCompressedData<TError = unknown>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
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
        ? getGetStudiesIdAttachmentsNameCompressedDataKey(args)
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
                (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
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
          client.studies[':id'].attachments[':name']['compressed-data'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsNameCompressedData<TError = unknown>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
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
        ? getGetStudiesIdAttachmentsNameCompressedDataKey(args)
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
                (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
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
          client.studies[':id'].attachments[':name']['compressed-data'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameCompressedMd5Key(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function useGetStudiesIdAttachmentsNameCompressedMd5<TError = unknown>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
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
        ? getGetStudiesIdAttachmentsNameCompressedMd5Key(args)
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
                (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
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
          client.studies[':id'].attachments[':name']['compressed-md5'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsNameCompressedMd5<TError = unknown>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
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
        ? getGetStudiesIdAttachmentsNameCompressedMd5Key(args)
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
                (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
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
          client.studies[':id'].attachments[':name']['compressed-md5'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameCompressedSizeKey(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function useGetStudiesIdAttachmentsNameCompressedSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
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
        ? getGetStudiesIdAttachmentsNameCompressedSizeKey(args)
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
                (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
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
          client.studies[':id'].attachments[':name']['compressed-size'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsNameCompressedSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
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
        ? getGetStudiesIdAttachmentsNameCompressedSizeKey(args)
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
                (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
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
          client.studies[':id'].attachments[':name']['compressed-size'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameDataKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/data', keyArgs] as const
}

export function useGetStudiesIdAttachmentsNameData<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
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
        ? getGetStudiesIdAttachmentsNameDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsNameData<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
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
        ? getGetStudiesIdAttachmentsNameDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameInfoKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/info', keyArgs] as const
}

export function useGetStudiesIdAttachmentsNameInfo<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
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
        ? getGetStudiesIdAttachmentsNameInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsNameInfo<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
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
        ? getGetStudiesIdAttachmentsNameInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameIsCompressedKey(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function useGetStudiesIdAttachmentsNameIsCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
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
        ? getGetStudiesIdAttachmentsNameIsCompressedKey(args)
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
                (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
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
          client.studies[':id'].attachments[':name']['is-compressed'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsNameIsCompressed<TError = unknown>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
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
        ? getGetStudiesIdAttachmentsNameIsCompressedKey(args)
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
                (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
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
          client.studies[':id'].attachments[':name']['is-compressed'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameMd5Key(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/md5', keyArgs] as const
}

export function useGetStudiesIdAttachmentsNameMd5<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
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
        ? getGetStudiesIdAttachmentsNameMd5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].md5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsNameMd5<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
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
        ? getGetStudiesIdAttachmentsNameMd5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].md5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdAttachmentsNameSizeKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/size', keyArgs] as const
}

export function useGetStudiesIdAttachmentsNameSize<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
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
        ? getGetStudiesIdAttachmentsNameSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].size.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdAttachmentsNameSize<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
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
        ? getGetStudiesIdAttachmentsNameSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.studies[':id'].attachments[':name'].size.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStudiesIdAttachmentsNameUncompressKey() {
  return ['studies', '/studies/:id/attachments/:name/uncompress', 'POST'] as const
}

export function usePostStudiesIdAttachmentsNameUncompress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdAttachmentsNameUncompressKey()
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
            (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.studies[':id'].attachments[':name'].uncompress.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStudiesIdAttachmentsNameVerifyMd5Key() {
  return ['studies', '/studies/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function usePostStudiesIdAttachmentsNameVerifyMd5<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdAttachmentsNameVerifyMd5Key()
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
            (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
          >
        },
      ) =>
        parseResponse(
          client.studies[':id'].attachments[':name']['verify-md5'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesIdInstancesKey(
  args: InferRequestType<(typeof client.studies)[':id']['instances']['$get']>,
) {
  return ['studies', '/studies/:id/instances', args] as const
}

export function useGetStudiesIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
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
        ? getGetStudiesIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
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
        ? getGetStudiesIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdInstancesTagsKey(
  args: InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>,
) {
  return ['studies', '/studies/:id/instances-tags', args] as const
}

export function useGetStudiesIdInstancesTags<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
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
        ? getGetStudiesIdInstancesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id']['instances-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdInstancesTags<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
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
        ? getGetStudiesIdInstancesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id']['instances-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdMediaKey(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$get']>,
) {
  return ['studies', '/studies/:id/media', args] as const
}

export function useGetStudiesIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStudiesIdMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdMedia<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStudiesIdMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStudiesIdMediaKey() {
  return ['studies', '/studies/:id/media', 'POST'] as const
}

export function usePostStudiesIdMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['media']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.studies)[':id']['media']['$post']> },
      ) => parseResponse(client.studies[':id'].media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStudiesIdMergeKey() {
  return ['studies', '/studies/:id/merge', 'POST'] as const
}

export function usePostStudiesIdMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['merge']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.studies)[':id']['merge']['$post']> },
      ) => parseResponse(client.studies[':id'].merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesIdMetadataKey(
  args: InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>,
) {
  return ['studies', '/studies/:id/metadata', args] as const
}

export function useGetStudiesIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
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
        ? getGetStudiesIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
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
        ? getGetStudiesIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdMetadataNameKey(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/metadata/:name', keyArgs] as const
}

export function useGetStudiesIdMetadataName<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
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
        ? getGetStudiesIdMetadataNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].metadata[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdMetadataName<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
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
        ? getGetStudiesIdMetadataNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].metadata[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStudiesIdMetadataNameKey() {
  return ['studies', '/studies/:id/metadata/:name', 'PUT'] as const
}

export function usePutStudiesIdMetadataName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStudiesIdMetadataNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']> },
      ) => parseResponse(client.studies[':id'].metadata[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStudiesIdMetadataNameKey() {
  return ['studies', '/studies/:id/metadata/:name', 'DELETE'] as const
}

export function useDeleteStudiesIdMetadataName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStudiesIdMetadataNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>
        },
      ) => parseResponse(client.studies[':id'].metadata[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStudiesIdModifyKey() {
  return ['studies', '/studies/:id/modify', 'POST'] as const
}

export function usePostStudiesIdModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['modify']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['modify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdModifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.studies)[':id']['modify']['$post']> },
      ) => parseResponse(client.studies[':id'].modify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesIdModuleKey(
  args: InferRequestType<(typeof client.studies)[':id']['module']['$get']>,
) {
  return ['studies', '/studies/:id/module', args] as const
}

export function useGetStudiesIdModule<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['module']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>
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
        ? getGetStudiesIdModuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].module.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdModule<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['module']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>
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
        ? getGetStudiesIdModuleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].module.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdModulePatientKey(
  args: InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>,
) {
  return ['studies', '/studies/:id/module-patient', args] as const
}

export function useGetStudiesIdModulePatient<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
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
        ? getGetStudiesIdModulePatientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id']['module-patient'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdModulePatient<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
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
        ? getGetStudiesIdModulePatientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id']['module-patient'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdPatientKey(
  args: InferRequestType<(typeof client.studies)[':id']['patient']['$get']>,
) {
  return ['studies', '/studies/:id/patient', args] as const
}

export function useGetStudiesIdPatient<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['patient']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>
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
        ? getGetStudiesIdPatientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].patient.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdPatient<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['patient']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>
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
        ? getGetStudiesIdPatientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].patient.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStudiesIdReconstructKey() {
  return ['studies', '/studies/:id/reconstruct', 'POST'] as const
}

export function usePostStudiesIdReconstruct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdReconstructKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']> },
      ) => parseResponse(client.studies[':id'].reconstruct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesIdSeriesKey(
  args: InferRequestType<(typeof client.studies)[':id']['series']['$get']>,
) {
  return ['studies', '/studies/:id/series', args] as const
}

export function useGetStudiesIdSeries<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>
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
        ? getGetStudiesIdSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdSeries<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>
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
        ? getGetStudiesIdSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudiesIdSharedTagsKey(
  args: InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>,
) {
  return ['studies', '/studies/:id/shared-tags', args] as const
}

export function useGetStudiesIdSharedTags<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
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
        ? getGetStudiesIdSharedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id']['shared-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdSharedTags<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
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
        ? getGetStudiesIdSharedTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id']['shared-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStudiesIdSplitKey() {
  return ['studies', '/studies/:id/split', 'POST'] as const
}

export function usePostStudiesIdSplit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['split']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.studies)[':id']['split']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStudiesIdSplitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.studies)[':id']['split']['$post']> },
      ) => parseResponse(client.studies[':id'].split.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStudiesIdStatisticsKey(
  args: InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>,
) {
  return ['studies', '/studies/:id/statistics', args] as const
}

export function useGetStudiesIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
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
        ? getGetStudiesIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudiesIdStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
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
        ? getGetStudiesIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studies[':id'].statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemKey() {
  return ['system', '/system'] as const
}

export function useGetSystem<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystem<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetToolsKey() {
  return ['tools', '/tools'] as const
}

export function useGetTools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetToolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetToolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetToolsAcceptedTransferSyntaxesKey() {
  return ['tools', '/tools/accepted-transfer-syntaxes'] as const
}

export function useGetToolsAcceptedTransferSyntaxes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsAcceptedTransferSyntaxesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tools['accepted-transfer-syntaxes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsAcceptedTransferSyntaxes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsAcceptedTransferSyntaxesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tools['accepted-transfer-syntaxes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsAcceptedTransferSyntaxesKey() {
  return ['tools', '/tools/accepted-transfer-syntaxes', 'PUT'] as const
}

export function usePutToolsAcceptedTransferSyntaxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsAcceptedTransferSyntaxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']> },
      ) => parseResponse(client.tools['accepted-transfer-syntaxes'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsBulkAnonymizeKey() {
  return ['tools', '/tools/bulk-anonymize', 'POST'] as const
}

export function usePostToolsBulkAnonymize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-anonymize']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsBulkAnonymizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']> },
      ) => parseResponse(client.tools['bulk-anonymize'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsBulkContentKey() {
  return ['tools', '/tools/bulk-content', 'POST'] as const
}

export function usePostToolsBulkContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-content']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['bulk-content']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsBulkContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['bulk-content']['$post']> },
      ) => parseResponse(client.tools['bulk-content'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsBulkDeleteKey() {
  return ['tools', '/tools/bulk-delete', 'POST'] as const
}

export function usePostToolsBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['bulk-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsBulkDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['bulk-delete']['$post']> },
      ) => parseResponse(client.tools['bulk-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsBulkModifyKey() {
  return ['tools', '/tools/bulk-modify', 'POST'] as const
}

export function usePostToolsBulkModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-modify']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['bulk-modify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsBulkModifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['bulk-modify']['$post']> },
      ) => parseResponse(client.tools['bulk-modify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsCreateArchiveKey() {
  return ['tools', '/tools/create-archive', 'POST'] as const
}

export function usePostToolsCreateArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-archive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['create-archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsCreateArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['create-archive']['$post']> },
      ) => parseResponse(client.tools['create-archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsCreateDicomKey() {
  return ['tools', '/tools/create-dicom', 'POST'] as const
}

export function usePostToolsCreateDicom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-dicom']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['create-dicom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsCreateDicomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['create-dicom']['$post']> },
      ) => parseResponse(client.tools['create-dicom'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsCreateMediaKey() {
  return ['tools', '/tools/create-media', 'POST'] as const
}

export function usePostToolsCreateMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-media']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['create-media']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsCreateMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['create-media']['$post']> },
      ) => parseResponse(client.tools['create-media'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsCreateMediaExtendedKey() {
  return ['tools', '/tools/create-media-extended', 'POST'] as const
}

export function usePostToolsCreateMediaExtended<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['create-media-extended']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['create-media-extended']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsCreateMediaExtendedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['create-media-extended']['$post']> },
      ) => parseResponse(client.tools['create-media-extended'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsDefaultEncodingKey() {
  return ['tools', '/tools/default-encoding'] as const
}

export function useGetToolsDefaultEncoding<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsDefaultEncodingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['default-encoding'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsDefaultEncoding<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsDefaultEncodingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['default-encoding'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsDefaultEncodingKey() {
  return ['tools', '/tools/default-encoding', 'PUT'] as const
}

export function usePutToolsDefaultEncoding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['default-encoding']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsDefaultEncodingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['default-encoding']['$put']> },
      ) => parseResponse(client.tools['default-encoding'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsDicomConformanceKey() {
  return ['tools', '/tools/dicom-conformance'] as const
}

export function useGetToolsDicomConformance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsDicomConformanceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['dicom-conformance'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsDicomConformance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsDicomConformanceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['dicom-conformance'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolsDicomEchoKey() {
  return ['tools', '/tools/dicom-echo', 'POST'] as const
}

export function usePostToolsDicomEcho<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['dicom-echo']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['dicom-echo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsDicomEchoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['dicom-echo']['$post']> },
      ) => parseResponse(client.tools['dicom-echo'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsExecuteScriptKey() {
  return ['tools', '/tools/execute-script', 'POST'] as const
}

export function usePostToolsExecuteScript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['execute-script']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['execute-script']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsExecuteScriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['execute-script']['$post']> },
      ) => parseResponse(client.tools['execute-script'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsFindKey() {
  return ['tools', '/tools/find', 'POST'] as const
}

export function usePostToolsFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.find.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tools.find.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tools.find.$post> }) =>
        parseResponse(client.tools.find.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsGenerateUidKey(
  args: InferRequestType<(typeof client.tools)['generate-uid']['$get']>,
) {
  return ['tools', '/tools/generate-uid', args] as const
}

export function useGetToolsGenerateUid<TError = unknown>(
  args: InferRequestType<(typeof client.tools)['generate-uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
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
        ? getGetToolsGenerateUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['generate-uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsGenerateUid<TError = unknown>(
  args: InferRequestType<(typeof client.tools)['generate-uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
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
        ? getGetToolsGenerateUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['generate-uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolsInvalidateTagsKey() {
  return ['tools', '/tools/invalidate-tags', 'POST'] as const
}

export function usePostToolsInvalidateTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['invalidate-tags']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsInvalidateTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.tools['invalidate-tags'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsLogLevelKey() {
  return ['tools', '/tools/log-level'] as const
}

export function useGetToolsLogLevel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsLogLevel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsLogLevelKey() {
  return ['tools', '/tools/log-level', 'PUT'] as const
}

export function usePutToolsLogLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['log-level']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsLogLevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['log-level']['$put']> },
      ) => parseResponse(client.tools['log-level'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsLogLevelDicomKey() {
  return ['tools', '/tools/log-level-dicom'] as const
}

export function useGetToolsLogLevelDicom<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelDicomKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-dicom'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsLogLevelDicom<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelDicomKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-dicom'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsLogLevelDicomKey() {
  return ['tools', '/tools/log-level-dicom', 'PUT'] as const
}

export function usePutToolsLogLevelDicom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['log-level-dicom']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsLogLevelDicomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['log-level-dicom']['$put']> },
      ) => parseResponse(client.tools['log-level-dicom'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsLogLevelGenericKey() {
  return ['tools', '/tools/log-level-generic'] as const
}

export function useGetToolsLogLevelGeneric<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsLogLevelGenericKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-generic'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsLogLevelGeneric<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsLogLevelGenericKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-generic'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsLogLevelGenericKey() {
  return ['tools', '/tools/log-level-generic', 'PUT'] as const
}

export function usePutToolsLogLevelGeneric<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['log-level-generic']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsLogLevelGenericKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['log-level-generic']['$put']> },
      ) => parseResponse(client.tools['log-level-generic'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsLogLevelHttpKey() {
  return ['tools', '/tools/log-level-http'] as const
}

export function useGetToolsLogLevelHttp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelHttpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-http'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsLogLevelHttp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelHttpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-http'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsLogLevelHttpKey() {
  return ['tools', '/tools/log-level-http', 'PUT'] as const
}

export function usePutToolsLogLevelHttp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['log-level-http']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsLogLevelHttpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['log-level-http']['$put']> },
      ) => parseResponse(client.tools['log-level-http'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsLogLevelJobsKey() {
  return ['tools', '/tools/log-level-jobs'] as const
}

export function useGetToolsLogLevelJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelJobsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-jobs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsLogLevelJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelJobsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-jobs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsLogLevelJobsKey() {
  return ['tools', '/tools/log-level-jobs', 'PUT'] as const
}

export function usePutToolsLogLevelJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['log-level-jobs']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsLogLevelJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['log-level-jobs']['$put']> },
      ) => parseResponse(client.tools['log-level-jobs'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsLogLevelLuaKey() {
  return ['tools', '/tools/log-level-lua'] as const
}

export function useGetToolsLogLevelLua<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelLuaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-lua'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsLogLevelLua<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsLogLevelLuaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-lua'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsLogLevelLuaKey() {
  return ['tools', '/tools/log-level-lua', 'PUT'] as const
}

export function usePutToolsLogLevelLua<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['log-level-lua']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsLogLevelLuaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['log-level-lua']['$put']> },
      ) => parseResponse(client.tools['log-level-lua'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsLogLevelPluginsKey() {
  return ['tools', '/tools/log-level-plugins'] as const
}

export function useGetToolsLogLevelPlugins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsLogLevelPluginsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-plugins'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsLogLevelPlugins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsLogLevelPluginsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-plugins'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsLogLevelPluginsKey() {
  return ['tools', '/tools/log-level-plugins', 'PUT'] as const
}

export function usePutToolsLogLevelPlugins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['log-level-plugins']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsLogLevelPluginsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['log-level-plugins']['$put']> },
      ) => parseResponse(client.tools['log-level-plugins'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsLogLevelSqliteKey() {
  return ['tools', '/tools/log-level-sqlite'] as const
}

export function useGetToolsLogLevelSqlite<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsLogLevelSqliteKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-sqlite'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsLogLevelSqlite<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsLogLevelSqliteKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['log-level-sqlite'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsLogLevelSqliteKey() {
  return ['tools', '/tools/log-level-sqlite', 'PUT'] as const
}

export function usePutToolsLogLevelSqlite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsLogLevelSqliteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']> },
      ) => parseResponse(client.tools['log-level-sqlite'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsLookupKey() {
  return ['tools', '/tools/lookup', 'POST'] as const
}

export function usePostToolsLookup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.lookup.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tools.lookup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsLookupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tools.lookup.$post> }) =>
        parseResponse(client.tools.lookup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsMetricsKey() {
  return ['tools', '/tools/metrics'] as const
}

export function useGetToolsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsMetricsKey() {
  return ['tools', '/tools/metrics', 'PUT'] as const
}

export function usePutToolsMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tools.metrics.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tools.metrics.$put> }) =>
        parseResponse(client.tools.metrics.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsMetricsPrometheusKey() {
  return ['tools', '/tools/metrics-prometheus'] as const
}

export function useGetToolsMetricsPrometheus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsMetricsPrometheusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['metrics-prometheus'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsMetricsPrometheus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsMetricsPrometheusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['metrics-prometheus'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetToolsNowKey() {
  return ['tools', '/tools/now'] as const
}

export function useGetToolsNow<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsNowKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools.now.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsNow<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsNowKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools.now.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetToolsNowLocalKey() {
  return ['tools', '/tools/now-local'] as const
}

export function useGetToolsNowLocal<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsNowLocalKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['now-local'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsNowLocal<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetToolsNowLocalKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tools['now-local'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostToolsReconstructKey() {
  return ['tools', '/tools/reconstruct', 'POST'] as const
}

export function usePostToolsReconstruct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.reconstruct.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tools.reconstruct.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsReconstructKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tools.reconstruct.$post> }) =>
        parseResponse(client.tools.reconstruct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsResetKey() {
  return ['tools', '/tools/reset', 'POST'] as const
}

export function usePostToolsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.reset.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.tools.reset.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostToolsShutdownKey() {
  return ['tools', '/tools/shutdown', 'POST'] as const
}

export function usePostToolsShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.shutdown.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolsShutdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.tools.shutdown.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetToolsUnknownSopClassAcceptedKey() {
  return ['tools', '/tools/unknown-sop-class-accepted'] as const
}

export function useGetToolsUnknownSopClassAccepted<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsUnknownSopClassAcceptedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tools['unknown-sop-class-accepted'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolsUnknownSopClassAccepted<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetToolsUnknownSopClassAcceptedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tools['unknown-sop-class-accepted'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutToolsUnknownSopClassAcceptedKey() {
  return ['tools', '/tools/unknown-sop-class-accepted', 'PUT'] as const
}

export function usePutToolsUnknownSopClassAccepted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutToolsUnknownSopClassAcceptedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']> },
      ) => parseResponse(client.tools['unknown-sop-class-accepted'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
