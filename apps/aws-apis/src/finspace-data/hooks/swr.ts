import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCredentialsKey() {
  return ['credentials'] as const
}

export function getDatasetsKey() {
  return ['datasets'] as const
}

export function getDatasetsv2Key() {
  return ['datasetsv2'] as const
}

export function getPermissionGroupKey() {
  return ['permission-group'] as const
}

export function getPermissionGroupMaxResultsKey() {
  return ['permission-group#maxResults'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUserMaxResultsKey() {
  return ['user#maxResults'] as const
}

export function getWorkingLocationV1Key() {
  return ['workingLocationV1'] as const
}

export function getPostPermissionGroupPermissionGroupIdUsersUserIdKey() {
  return ['permission-group', '/permission-group/:permissionGroupId/users/:userId', 'POST'] as const
}

export function usePostPermissionGroupPermissionGroupIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPermissionGroupPermissionGroupIdUsersUserIdKey()
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
            (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['permission-group'][':permissionGroupId'].users[':userId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePermissionGroupPermissionGroupIdUsersUserIdKey() {
  return [
    'permission-group',
    '/permission-group/:permissionGroupId/users/:userId',
    'DELETE',
  ] as const
}

export function useDeletePermissionGroupPermissionGroupIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePermissionGroupPermissionGroupIdUsersUserIdKey()
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
            (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['permission-group'][':permissionGroupId'].users[':userId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsDatasetIdChangesetsv2Key(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetId/changesetsv2', keyArgs] as const
}

export function useGetDatasetsDatasetIdChangesetsv2<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
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
        ? getGetDatasetsDatasetIdChangesetsv2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasets[':datasetId'].changesetsv2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsDatasetIdChangesetsv2<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
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
        ? getGetDatasetsDatasetIdChangesetsv2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasets[':datasetId'].changesetsv2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasetsDatasetIdChangesetsv2Key() {
  return ['datasets', '/datasets/:datasetId/changesetsv2', 'POST'] as const
}

export function usePostDatasetsDatasetIdChangesetsv2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetsDatasetIdChangesetsv2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>
        },
      ) => parseResponse(client.datasets[':datasetId'].changesetsv2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsDatasetIdDataviewsv2Key(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetId/dataviewsv2', keyArgs] as const
}

export function useGetDatasetsDatasetIdDataviewsv2<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
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
        ? getGetDatasetsDatasetIdDataviewsv2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasets[':datasetId'].dataviewsv2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsDatasetIdDataviewsv2<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
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
        ? getGetDatasetsDatasetIdDataviewsv2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasets[':datasetId'].dataviewsv2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasetsDatasetIdDataviewsv2Key() {
  return ['datasets', '/datasets/:datasetId/dataviewsv2', 'POST'] as const
}

export function usePostDatasetsDatasetIdDataviewsv2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetsDatasetIdDataviewsv2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>
        },
      ) => parseResponse(client.datasets[':datasetId'].dataviewsv2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsv2Key(args: InferRequestType<typeof client.datasetsv2.$get>) {
  const { header: _, ...keyArgs } = args
  return ['datasetsv2', '/datasetsv2', keyArgs] as const
}

export function useGetDatasetsv2<TError = unknown>(
  args: InferRequestType<typeof client.datasetsv2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetsv2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasetsv2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsv2<TError = unknown>(
  args: InferRequestType<typeof client.datasetsv2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetsv2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasetsv2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasetsv2Key() {
  return ['datasetsv2', '/datasetsv2', 'POST'] as const
}

export function usePostDatasetsv2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasetsv2.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.datasetsv2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetsv2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datasetsv2.$post> }) =>
        parseResponse(client.datasetsv2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPermissionGroupKey() {
  return ['permission-group', '/permission-group', 'POST'] as const
}

export function usePostPermissionGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['permission-group']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['permission-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPermissionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['permission-group']['$post']> },
      ) => parseResponse(client['permission-group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserKey() {
  return ['user', '/user', 'POST'] as const
}

export function usePostUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$post> }) =>
        parseResponse(client.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsv2DatasetIdKey(
  args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasetsv2', '/datasetsv2/:datasetId', keyArgs] as const
}

export function useGetDatasetsv2DatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>
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
        ? getGetDatasetsv2DatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasetsv2[':datasetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsv2DatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>
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
        ? getGetDatasetsv2DatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasetsv2[':datasetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatasetsv2DatasetIdKey() {
  return ['datasetsv2', '/datasetsv2/:datasetId', 'PUT'] as const
}

export function usePutDatasetsv2DatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasetsv2)[':datasetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatasetsv2DatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$put']> },
      ) => parseResponse(client.datasetsv2[':datasetId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasetsv2DatasetIdKey() {
  return ['datasetsv2', '/datasetsv2/:datasetId', 'DELETE'] as const
}

export function useDeleteDatasetsv2DatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasetsv2)[':datasetId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasetsv2)[':datasetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasetsv2DatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$delete']> },
      ) => parseResponse(client.datasetsv2[':datasetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionGroupPermissionGroupIdKey(
  args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['permission-group', '/permission-group/:permissionGroupId', keyArgs] as const
}

export function useGetPermissionGroupPermissionGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>>
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
        ? getGetPermissionGroupPermissionGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['permission-group'][':permissionGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionGroupPermissionGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>>
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
        ? getGetPermissionGroupPermissionGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['permission-group'][':permissionGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPermissionGroupPermissionGroupIdKey() {
  return ['permission-group', '/permission-group/:permissionGroupId', 'PUT'] as const
}

export function usePutPermissionGroupPermissionGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPermissionGroupPermissionGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$put']>
        },
      ) => parseResponse(client['permission-group'][':permissionGroupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePermissionGroupPermissionGroupIdKey() {
  return ['permission-group', '/permission-group/:permissionGroupId', 'DELETE'] as const
}

export function useDeletePermissionGroupPermissionGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['permission-group'][':permissionGroupId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePermissionGroupPermissionGroupIdKey()
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
            (typeof client)['permission-group'][':permissionGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(client['permission-group'][':permissionGroupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserUserIdDisableKey() {
  return ['user', '/user/:userId/disable', 'POST'] as const
}

export function usePostUserUserIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUserIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user)[':userId']['disable']['$post']> },
      ) => parseResponse(client.user[':userId'].disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserUserIdEnableKey() {
  return ['user', '/user/:userId/enable', 'POST'] as const
}

export function usePostUserUserIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUserIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user)[':userId']['enable']['$post']> },
      ) => parseResponse(client.user[':userId'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsDatasetIdChangesetsv2ChangesetIdKey(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetId/changesetsv2/:changesetId', keyArgs] as const
}

export function useGetDatasetsDatasetIdChangesetsv2ChangesetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
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
        ? getGetDatasetsDatasetIdChangesetsv2ChangesetIdKey(args)
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
                (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
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
          client.datasets[':datasetId'].changesetsv2[':changesetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsDatasetIdChangesetsv2ChangesetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
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
        ? getGetDatasetsDatasetIdChangesetsv2ChangesetIdKey(args)
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
                (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
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
          client.datasets[':datasetId'].changesetsv2[':changesetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDatasetsDatasetIdChangesetsv2ChangesetIdKey() {
  return ['datasets', '/datasets/:datasetId/changesetsv2/:changesetId', 'PUT'] as const
}

export function usePutDatasetsDatasetIdChangesetsv2ChangesetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatasetsDatasetIdChangesetsv2ChangesetIdKey()
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
            (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.datasets[':datasetId'].changesetsv2[':changesetId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsDatasetIdDataviewsv2DataviewIdKey(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:datasetId/dataviewsv2/:dataviewId', keyArgs] as const
}

export function useGetDatasetsDatasetIdDataviewsv2DataviewId<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
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
        ? getGetDatasetsDatasetIdDataviewsv2DataviewIdKey(args)
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
                (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
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
          client.datasets[':datasetId'].dataviewsv2[':dataviewId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsDatasetIdDataviewsv2DataviewId<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
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
        ? getGetDatasetsDatasetIdDataviewsv2DataviewIdKey(args)
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
                (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
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
          client.datasets[':datasetId'].dataviewsv2[':dataviewId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsKey() {
  return [
    'datasets',
    '/datasets/:datasetId/dataviewsv2/:dataviewId/external-access-details',
    'POST',
  ] as const
}

export function usePostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsKey()
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
            (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
          >
        },
      ) =>
        parseResponse(
          client.datasets[':datasetId'].dataviewsv2[':dataviewId']['external-access-details'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCredentialsProgrammaticEnvironmentIdKey(
  args: InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['credentials', '/credentials/programmatic#environmentId', keyArgs] as const
}

export function useGetCredentialsProgrammaticEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>>
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
        ? getGetCredentialsProgrammaticEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.credentials['programmatic#environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCredentialsProgrammaticEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>>
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
        ? getGetCredentialsProgrammaticEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.credentials)['programmatic#environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.credentials['programmatic#environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdKey(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/:userId', keyArgs] as const
}

export function useGetUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserUserIdKey() {
  return ['user', '/user/:userId', 'PUT'] as const
}

export function usePutUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.user)[':userId']['$put']> }) =>
        parseResponse(client.user[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorkingLocationV1Key() {
  return ['workingLocationV1', '/workingLocationV1', 'POST'] as const
}

export function usePostWorkingLocationV1<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workingLocationV1.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.workingLocationV1.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkingLocationV1Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workingLocationV1.$post> }) =>
        parseResponse(client.workingLocationV1.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionGroupMaxResultsKey(
  args: InferRequestType<(typeof client)['permission-group#maxResults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['permission-group#maxResults', '/permission-group#maxResults', keyArgs] as const
}

export function useGetPermissionGroupMaxResults<TError = unknown>(
  args: InferRequestType<(typeof client)['permission-group#maxResults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
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
        ? getGetPermissionGroupMaxResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['permission-group#maxResults'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionGroupMaxResults<TError = unknown>(
  args: InferRequestType<(typeof client)['permission-group#maxResults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
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
        ? getGetPermissionGroupMaxResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['permission-group#maxResults']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['permission-group#maxResults'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdPermissionGroupsMaxResultsKey(
  args: InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user', '/user/:userId/permission-groups#maxResults', keyArgs] as const
}

export function useGetUserUserIdPermissionGroupsMaxResults<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>
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
        ? getGetUserUserIdPermissionGroupsMaxResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId']['permission-groups#maxResults'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdPermissionGroupsMaxResults<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>
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
        ? getGetUserUserIdPermissionGroupsMaxResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId']['permission-groups#maxResults'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserMaxResultsKey(
  args: InferRequestType<(typeof client)['user#maxResults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['user#maxResults', '/user#maxResults', keyArgs] as const
}

export function useGetUserMaxResults<TError = unknown>(
  args: InferRequestType<(typeof client)['user#maxResults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserMaxResultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user#maxResults'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserMaxResults<TError = unknown>(
  args: InferRequestType<(typeof client)['user#maxResults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserMaxResultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user#maxResults']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user#maxResults'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPermissionGroupPermissionGroupIdUsersMaxResultsKey(
  args: InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'permission-group',
    '/permission-group/:permissionGroupId/users#maxResults',
    keyArgs,
  ] as const
}

export function useGetPermissionGroupPermissionGroupIdUsersMaxResults<TError = unknown>(
  args: InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
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
        ? getGetPermissionGroupPermissionGroupIdUsersMaxResultsKey(args)
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
                (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
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
          client['permission-group'][':permissionGroupId']['users#maxResults'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionGroupPermissionGroupIdUsersMaxResults<TError = unknown>(
  args: InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
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
        ? getGetPermissionGroupPermissionGroupIdUsersMaxResultsKey(args)
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
                (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
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
          client['permission-group'][':permissionGroupId']['users#maxResults'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserUserIdPasswordKey() {
  return ['user', '/user/:userId/password', 'POST'] as const
}

export function usePostUserUserIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUserIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user)[':userId']['password']['$post']> },
      ) => parseResponse(client.user[':userId'].password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
