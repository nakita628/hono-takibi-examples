import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2015_02_01Key() {
  return ['2015-02-01'] as const
}

export function getGet20150201AccessPointsKey(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/access-points', keyArgs] as const
}

export function useGet20150201AccessPoints<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150201AccessPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-02-01']['access-points'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201AccessPoints<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150201AccessPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-02-01']['access-points'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20150201AccessPointsKey() {
  return ['2015-02-01', '/2015-02-01/access-points', 'POST'] as const
}

export function usePost20150201AccessPoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['access-points']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150201AccessPointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-02-01']['access-points']['$post']> },
      ) => parseResponse(client['2015-02-01']['access-points'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150201FileSystemsKey(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/file-systems', keyArgs] as const
}

export function useGet20150201FileSystems<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150201FileSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-02-01']['file-systems'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201FileSystems<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150201FileSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-02-01']['file-systems'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20150201FileSystemsKey() {
  return ['2015-02-01', '/2015-02-01/file-systems', 'POST'] as const
}

export function usePost20150201FileSystems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['file-systems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150201FileSystemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$post']> },
      ) => parseResponse(client['2015-02-01']['file-systems'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150201MountTargetsKey(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/mount-targets', keyArgs] as const
}

export function useGet20150201MountTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150201MountTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-02-01']['mount-targets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201MountTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150201MountTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-02-01']['mount-targets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20150201MountTargetsKey() {
  return ['2015-02-01', '/2015-02-01/mount-targets', 'POST'] as const
}

export function usePost20150201MountTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150201MountTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$post']> },
      ) => parseResponse(client['2015-02-01']['mount-targets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20150201FileSystemsSourceFileSystemIdReplicationConfigurationKey() {
  return [
    '2015-02-01',
    '/2015-02-01/file-systems/:SourceFileSystemId/replication-configuration',
    'POST',
  ] as const
}

export function usePost20150201FileSystemsSourceFileSystemIdReplicationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20150201FileSystemsSourceFileSystemIdReplicationConfigurationKey()
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
            (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['file-systems'][':SourceFileSystemId'][
            'replication-configuration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150201FileSystemsSourceFileSystemIdReplicationConfigurationKey() {
  return [
    '2015-02-01',
    '/2015-02-01/file-systems/:SourceFileSystemId/replication-configuration',
    'DELETE',
  ] as const
}

export function useDelete20150201FileSystemsSourceFileSystemIdReplicationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDelete20150201FileSystemsSourceFileSystemIdReplicationConfigurationKey()
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
            (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['file-systems'][':SourceFileSystemId'][
            'replication-configuration'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150201CreateTagsFileSystemIdKey() {
  return ['2015-02-01', '/2015-02-01/create-tags/:FileSystemId', 'POST'] as const
}

export function usePost20150201CreateTagsFileSystemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['create-tags'][':FileSystemId']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['create-tags'][':FileSystemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150201CreateTagsFileSystemIdKey()
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
            (typeof client)['2015-02-01']['create-tags'][':FileSystemId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['create-tags'][':FileSystemId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150201AccessPointsAccessPointIdKey() {
  return ['2015-02-01', '/2015-02-01/access-points/:AccessPointId', 'DELETE'] as const
}

export function useDelete20150201AccessPointsAccessPointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['access-points'][':AccessPointId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['access-points'][':AccessPointId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150201AccessPointsAccessPointIdKey()
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
            (typeof client)['2015-02-01']['access-points'][':AccessPointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['access-points'][':AccessPointId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut20150201FileSystemsFileSystemIdKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId', 'PUT'] as const
}

export function usePut20150201FileSystemsFileSystemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150201FileSystemsFileSystemIdKey()
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
            (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['file-systems'][':FileSystemId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150201FileSystemsFileSystemIdKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId', 'DELETE'] as const
}

export function useDelete20150201FileSystemsFileSystemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150201FileSystemsFileSystemIdKey()
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
            (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['file-systems'][':FileSystemId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150201FileSystemsFileSystemIdPolicyKey(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/policy', keyArgs] as const
}

export function useGet20150201FileSystemsFileSystemIdPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
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
        ? getGet20150201FileSystemsFileSystemIdPolicyKey(args)
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
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
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
          client['2015-02-01']['file-systems'][':FileSystemId'].policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201FileSystemsFileSystemIdPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
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
        ? getGet20150201FileSystemsFileSystemIdPolicyKey(args)
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
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
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
          client['2015-02-01']['file-systems'][':FileSystemId'].policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20150201FileSystemsFileSystemIdPolicyKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/policy', 'PUT'] as const
}

export function usePut20150201FileSystemsFileSystemIdPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150201FileSystemsFileSystemIdPolicyKey()
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
            (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['file-systems'][':FileSystemId'].policy.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150201FileSystemsFileSystemIdPolicyKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/policy', 'DELETE'] as const
}

export function useDelete20150201FileSystemsFileSystemIdPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150201FileSystemsFileSystemIdPolicyKey()
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
            (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['file-systems'][':FileSystemId'].policy.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150201MountTargetsMountTargetIdKey() {
  return ['2015-02-01', '/2015-02-01/mount-targets/:MountTargetId', 'DELETE'] as const
}

export function useDelete20150201MountTargetsMountTargetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150201MountTargetsMountTargetIdKey()
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
            (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['mount-targets'][':MountTargetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150201DeleteTagsFileSystemIdKey() {
  return ['2015-02-01', '/2015-02-01/delete-tags/:FileSystemId', 'POST'] as const
}

export function usePost20150201DeleteTagsFileSystemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['delete-tags'][':FileSystemId']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['delete-tags'][':FileSystemId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150201DeleteTagsFileSystemIdKey()
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
            (typeof client)['2015-02-01']['delete-tags'][':FileSystemId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['delete-tags'][':FileSystemId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150201AccountPreferencesKey(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/account-preferences', keyArgs] as const
}

export function useGet20150201AccountPreferences<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150201AccountPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-02-01']['account-preferences'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201AccountPreferences<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150201AccountPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-02-01']['account-preferences'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20150201AccountPreferencesKey() {
  return ['2015-02-01', '/2015-02-01/account-preferences', 'PUT'] as const
}

export function usePut20150201AccountPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150201AccountPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$put']> },
      ) => parseResponse(client['2015-02-01']['account-preferences'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150201FileSystemsFileSystemIdBackupPolicyKey(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/backup-policy', keyArgs] as const
}

export function useGet20150201FileSystemsFileSystemIdBackupPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
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
        ? getGet20150201FileSystemsFileSystemIdBackupPolicyKey(args)
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
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
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
          client['2015-02-01']['file-systems'][':FileSystemId']['backup-policy'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201FileSystemsFileSystemIdBackupPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
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
        ? getGet20150201FileSystemsFileSystemIdBackupPolicyKey(args)
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
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
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
          client['2015-02-01']['file-systems'][':FileSystemId']['backup-policy'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20150201FileSystemsFileSystemIdBackupPolicyKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/backup-policy', 'PUT'] as const
}

export function usePut20150201FileSystemsFileSystemIdBackupPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150201FileSystemsFileSystemIdBackupPolicyKey()
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
            (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['file-systems'][':FileSystemId']['backup-policy'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150201FileSystemsFileSystemIdLifecycleConfigurationKey(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2015-02-01',
    '/2015-02-01/file-systems/:FileSystemId/lifecycle-configuration',
    keyArgs,
  ] as const
}

export function useGet20150201FileSystemsFileSystemIdLifecycleConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
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
        ? getGet20150201FileSystemsFileSystemIdLifecycleConfigurationKey(args)
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
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
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
          client['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201FileSystemsFileSystemIdLifecycleConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
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
        ? getGet20150201FileSystemsFileSystemIdLifecycleConfigurationKey(args)
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
                (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
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
          client['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20150201FileSystemsFileSystemIdLifecycleConfigurationKey() {
  return [
    '2015-02-01',
    '/2015-02-01/file-systems/:FileSystemId/lifecycle-configuration',
    'PUT',
  ] as const
}

export function usePut20150201FileSystemsFileSystemIdLifecycleConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150201FileSystemsFileSystemIdLifecycleConfigurationKey()
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
            (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150201MountTargetsMountTargetIdSecurityGroupsKey(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2015-02-01',
    '/2015-02-01/mount-targets/:MountTargetId/security-groups',
    keyArgs,
  ] as const
}

export function useGet20150201MountTargetsMountTargetIdSecurityGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
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
        ? getGet20150201MountTargetsMountTargetIdSecurityGroupsKey(args)
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
                (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
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
          client['2015-02-01']['mount-targets'][':MountTargetId']['security-groups'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201MountTargetsMountTargetIdSecurityGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
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
        ? getGet20150201MountTargetsMountTargetIdSecurityGroupsKey(args)
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
                (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
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
          client['2015-02-01']['mount-targets'][':MountTargetId']['security-groups'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20150201MountTargetsMountTargetIdSecurityGroupsKey() {
  return ['2015-02-01', '/2015-02-01/mount-targets/:MountTargetId/security-groups', 'PUT'] as const
}

export function usePut20150201MountTargetsMountTargetIdSecurityGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150201MountTargetsMountTargetIdSecurityGroupsKey()
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
            (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['mount-targets'][':MountTargetId']['security-groups'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150201FileSystemsReplicationConfigurationsKey(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/file-systems/replication-configurations', keyArgs] as const
}

export function useGet20150201FileSystemsReplicationConfigurations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
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
        ? getGet20150201FileSystemsReplicationConfigurationsKey(args)
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
                (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
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
          client['2015-02-01']['file-systems']['replication-configurations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201FileSystemsReplicationConfigurations<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
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
        ? getGet20150201FileSystemsReplicationConfigurationsKey(args)
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
                (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
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
          client['2015-02-01']['file-systems']['replication-configurations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150201TagsFileSystemIdIndexKey(
  args: InferRequestType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/tags/:FileSystemId/', keyArgs] as const
}

export function useGet20150201TagsFileSystemIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>
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
        ? getGet20150201TagsFileSystemIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-02-01'].tags[':FileSystemId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201TagsFileSystemIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>
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
        ? getGet20150201TagsFileSystemIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-02-01'].tags[':FileSystemId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20150201ResourceTagsResourceIdKey(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/resource-tags/:ResourceId', keyArgs] as const
}

export function useGet20150201ResourceTagsResourceId<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>
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
        ? getGet20150201ResourceTagsResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-02-01']['resource-tags'][':ResourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150201ResourceTagsResourceId<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>
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
        ? getGet20150201ResourceTagsResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-02-01']['resource-tags'][':ResourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20150201ResourceTagsResourceIdKey() {
  return ['2015-02-01', '/2015-02-01/resource-tags/:ResourceId', 'POST'] as const
}

export function usePost20150201ResourceTagsResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150201ResourceTagsResourceIdKey()
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
            (typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['resource-tags'][':ResourceId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150201ResourceTagsResourceIdTagKeysKey() {
  return ['2015-02-01', '/2015-02-01/resource-tags/:ResourceId#tagKeys', 'DELETE'] as const
}

export function useDelete20150201ResourceTagsResourceIdTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-02-01']['resource-tags'][':ResourceId#tagKeys']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-02-01']['resource-tags'][':ResourceId#tagKeys']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150201ResourceTagsResourceIdTagKeysKey()
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
            (typeof client)['2015-02-01']['resource-tags'][':ResourceId#tagKeys']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-02-01']['resource-tags'][':ResourceId#tagKeys'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
