import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['__admin'] as const
}

export function getGetAdminMappingsKey(
  args: InferRequestType<typeof client.__admin.mappings.$get>,
) {
  return ['__admin', '/__admin/mappings', args] as const
}

export function useGetAdminMappings<TError = unknown>(
  args: InferRequestType<typeof client.__admin.mappings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminMappingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.mappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminMappings<TError = unknown>(
  args: InferRequestType<typeof client.__admin.mappings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminMappingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.mappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminMappingsKey() {
  return ['__admin', '/__admin/mappings', 'POST'] as const
}

export function usePostAdminMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.__admin.mappings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminMappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.__admin.mappings.$post> }) =>
        parseResponse(client.__admin.mappings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminMappingsKey() {
  return ['__admin', '/__admin/mappings', 'DELETE'] as const
}

export function useDeleteAdminMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminMappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.mappings.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminMappingsFindByMetadataKey() {
  return ['__admin', '/__admin/mappings/find-by-metadata', 'POST'] as const
}

export function usePostAdminMappingsFindByMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)['find-by-metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.__admin.mappings)['find-by-metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminMappingsFindByMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.__admin.mappings)['find-by-metadata']['$post']> },
      ) => parseResponse(client.__admin.mappings['find-by-metadata'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminMappingsImportKey() {
  return ['__admin', '/__admin/mappings/import', 'POST'] as const
}

export function usePostAdminMappingsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.import.$post>>>
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
  const swrKey = customKey ?? getPostAdminMappingsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.mappings.import.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminMappingsRemoveByMetadataKey() {
  return ['__admin', '/__admin/mappings/remove-by-metadata', 'POST'] as const
}

export function usePostAdminMappingsRemoveByMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminMappingsRemoveByMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>
        },
      ) => parseResponse(client.__admin.mappings['remove-by-metadata'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminMappingsResetKey() {
  return ['__admin', '/__admin/mappings/reset', 'POST'] as const
}

export function usePostAdminMappingsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.reset.$post>>>
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
  const swrKey = customKey ?? getPostAdminMappingsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.mappings.reset.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminMappingsSaveKey() {
  return ['__admin', '/__admin/mappings/save', 'POST'] as const
}

export function usePostAdminMappingsSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.save.$post>>>
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
  const swrKey = customKey ?? getPostAdminMappingsSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.mappings.save.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminMappingsStubMappingIdKey(
  args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>,
) {
  return ['__admin', '/__admin/mappings/:stubMappingId', args] as const
}

export function useGetAdminMappingsStubMappingId<TError = unknown>(
  args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>>
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
        ? getGetAdminMappingsStubMappingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.__admin.mappings[':stubMappingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminMappingsStubMappingId<TError = unknown>(
  args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>>
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
        ? getGetAdminMappingsStubMappingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.__admin.mappings[':stubMappingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminMappingsStubMappingIdKey() {
  return ['__admin', '/__admin/mappings/:stubMappingId', 'PUT'] as const
}

export function usePutAdminMappingsStubMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminMappingsStubMappingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$put']> },
      ) => parseResponse(client.__admin.mappings[':stubMappingId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminMappingsStubMappingIdKey() {
  return ['__admin', '/__admin/mappings/:stubMappingId', 'DELETE'] as const
}

export function useDeleteAdminMappingsStubMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminMappingsStubMappingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']> },
      ) => parseResponse(client.__admin.mappings[':stubMappingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminNearMissesRequestKey() {
  return ['__admin', '/__admin/near-misses/request', 'POST'] as const
}

export function usePostAdminNearMissesRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin)['near-misses']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.__admin)['near-misses']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminNearMissesRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.__admin)['near-misses']['request']['$post']> },
      ) => parseResponse(client.__admin['near-misses'].request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminNearMissesRequestPatternKey() {
  return ['__admin', '/__admin/near-misses/request-pattern', 'POST'] as const
}

export function usePostAdminNearMissesRequestPattern<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminNearMissesRequestPatternKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>
        },
      ) =>
        parseResponse(client.__admin['near-misses']['request-pattern'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminRecordingsSnapshotKey() {
  return ['__admin', '/__admin/recordings/snapshot', 'POST'] as const
}

export function usePostAdminRecordingsSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.snapshot.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.__admin.recordings.snapshot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRecordingsSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.__admin.recordings.snapshot.$post> },
      ) => parseResponse(client.__admin.recordings.snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminRecordingsStartKey() {
  return ['__admin', '/__admin/recordings/start', 'POST'] as const
}

export function usePostAdminRecordingsStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.start.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.__admin.recordings.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRecordingsStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.__admin.recordings.start.$post> },
      ) => parseResponse(client.__admin.recordings.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRecordingsStatusKey() {
  return ['__admin', '/__admin/recordings/status'] as const
}

export function useGetAdminRecordingsStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.status.$get>>>
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
        ? getGetAdminRecordingsStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.recordings.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRecordingsStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.status.$get>>>
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
        ? getGetAdminRecordingsStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.recordings.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminRecordingsStopKey() {
  return ['__admin', '/__admin/recordings/stop', 'POST'] as const
}

export function usePostAdminRecordingsStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.stop.$post>>>
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
  const swrKey = customKey ?? getPostAdminRecordingsStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.recordings.stop.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRequestsKey(
  args: InferRequestType<typeof client.__admin.requests.$get>,
) {
  return ['__admin', '/__admin/requests', args] as const
}

export function useGetAdminRequests<TError = unknown>(
  args: InferRequestType<typeof client.__admin.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRequests<TError = unknown>(
  args: InferRequestType<typeof client.__admin.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminRequestsKey() {
  return ['__admin', '/__admin/requests', 'DELETE'] as const
}

export function useDeleteAdminRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.requests.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminRequestsCountKey() {
  return ['__admin', '/__admin/requests/count', 'POST'] as const
}

export function usePostAdminRequestsCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.count.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.__admin.requests.count.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRequestsCountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.__admin.requests.count.$post> },
      ) => parseResponse(client.__admin.requests.count.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminRequestsFindKey() {
  return ['__admin', '/__admin/requests/find', 'POST'] as const
}

export function usePostAdminRequestsFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.find.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.__admin.requests.find.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRequestsFindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.__admin.requests.find.$post> },
      ) => parseResponse(client.__admin.requests.find.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminRequestsRemoveKey() {
  return ['__admin', '/__admin/requests/remove', 'POST'] as const
}

export function usePostAdminRequestsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.__admin.requests.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRequestsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.__admin.requests.remove.$post> },
      ) => parseResponse(client.__admin.requests.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminRequestsRemoveByMetadataKey() {
  return ['__admin', '/__admin/requests/remove-by-metadata', 'POST'] as const
}

export function usePostAdminRequestsRemoveByMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRequestsRemoveByMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>
        },
      ) => parseResponse(client.__admin.requests['remove-by-metadata'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminRequestsResetKey() {
  return ['__admin', '/__admin/requests/reset', 'POST'] as const
}

export function usePostAdminRequestsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.reset.$post>>>
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
  const swrKey = customKey ?? getPostAdminRequestsResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.requests.reset.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRequestsUnmatchedKey() {
  return ['__admin', '/__admin/requests/unmatched'] as const
}

export function useGetAdminRequestsUnmatched<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.unmatched.$get>>>
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
        ? getGetAdminRequestsUnmatchedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.unmatched.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.requests.unmatched.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRequestsUnmatched<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.unmatched.$get>>>
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
        ? getGetAdminRequestsUnmatchedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.unmatched.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.requests.unmatched.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminRequestsUnmatchedNearMissesKey() {
  return ['__admin', '/__admin/requests/unmatched/near-misses'] as const
}

export function useGetAdminRequestsUnmatchedNearMisses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.requests.unmatched)['near-misses']['$get']>>
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
        ? getGetAdminRequestsUnmatchedNearMissesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.requests.unmatched)['near-misses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.__admin.requests.unmatched['near-misses'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRequestsUnmatchedNearMisses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.requests.unmatched)['near-misses']['$get']>>
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
        ? getGetAdminRequestsUnmatchedNearMissesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.requests.unmatched)['near-misses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.__admin.requests.unmatched['near-misses'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminRequestsRequestIdKey(
  args: InferRequestType<(typeof client.__admin.requests)[':requestId']['$get']>,
) {
  return ['__admin', '/__admin/requests/:requestId', args] as const
}

export function useGetAdminRequestsRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.__admin.requests)[':requestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$get']>>
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
        ? getGetAdminRequestsRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.requests[':requestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRequestsRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.__admin.requests)[':requestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$get']>>
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
        ? getGetAdminRequestsRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.requests[':requestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminRequestsRequestIdKey() {
  return ['__admin', '/__admin/requests/:requestId', 'DELETE'] as const
}

export function useDeleteAdminRequestsRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.__admin.requests)[':requestId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminRequestsRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.__admin.requests)[':requestId']['$delete']> },
      ) => parseResponse(client.__admin.requests[':requestId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminResetKey() {
  return ['__admin', '/__admin/reset', 'POST'] as const
}

export function usePostAdminReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.reset.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.reset.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminScenariosKey() {
  return ['__admin', '/__admin/scenarios'] as const
}

export function useGetAdminScenarios<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminScenariosKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.scenarios.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminScenarios<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminScenariosKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.__admin.scenarios.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminScenariosResetKey() {
  return ['__admin', '/__admin/scenarios/reset', 'POST'] as const
}

export function usePostAdminScenariosReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.reset.$post>>>
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
  const swrKey = customKey ?? getPostAdminScenariosResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.scenarios.reset.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminSettingsKey() {
  return ['__admin', '/__admin/settings', 'POST'] as const
}

export function usePostAdminSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.__admin.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.__admin.settings.$post> }) =>
        parseResponse(client.__admin.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminShutdownKey() {
  return ['__admin', '/__admin/shutdown', 'POST'] as const
}

export function usePostAdminShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.shutdown.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminShutdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.__admin.shutdown.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
