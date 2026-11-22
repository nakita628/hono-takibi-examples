import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2015_02_01Key() {
  return ['2015-02-01'] as const
}

export function get20150201AccessPointsQueryKey(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/access-points', keyArgs] as const
}

export function get20150201AccessPointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150201AccessPointsQueryKey>
  >({
    queryKey: get20150201AccessPointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['access-points'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201AccessPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201AccessPointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20150201AccessPointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20150201AccessPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201AccessPointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20150201AccessPointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPost20150201AccessPointsMutationKey() {
  return ['2015-02-01', '/2015-02-01/access-points', 'POST'] as const
}

export function getPost20150201AccessPointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-02-01']['access-points']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150201AccessPointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$post']>,
    ) {
      return parseResponse(client['2015-02-01']['access-points'].$post(args, options))
    },
  })
}

export function usePost20150201AccessPoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['access-points']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2015-02-01']['access-points']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150201AccessPointsMutationOptions<TError, TOnMutateResult>(
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

export function get20150201FileSystemsQueryKey(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/file-systems', keyArgs] as const
}

export function get20150201FileSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150201FileSystemsQueryKey>
  >({
    queryKey: get20150201FileSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['file-systems'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201FileSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20150201FileSystemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20150201FileSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20150201FileSystemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPost20150201FileSystemsMutationKey() {
  return ['2015-02-01', '/2015-02-01/file-systems', 'POST'] as const
}

export function getPost20150201FileSystemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-02-01']['file-systems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150201FileSystemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$post']>,
    ) {
      return parseResponse(client['2015-02-01']['file-systems'].$post(args, options))
    },
  })
}

export function usePost20150201FileSystems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['file-systems']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2015-02-01']['file-systems']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150201FileSystemsMutationOptions<TError, TOnMutateResult>(
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

export function get20150201MountTargetsQueryKey(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/mount-targets', keyArgs] as const
}

export function get20150201MountTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150201MountTargetsQueryKey>
  >({
    queryKey: get20150201MountTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['mount-targets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201MountTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201MountTargetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20150201MountTargetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20150201MountTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201MountTargetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20150201MountTargetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPost20150201MountTargetsMutationKey() {
  return ['2015-02-01', '/2015-02-01/mount-targets', 'POST'] as const
}

export function getPost20150201MountTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150201MountTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$post']>,
    ) {
      return parseResponse(client['2015-02-01']['mount-targets'].$post(args, options))
    },
  })
}

export function usePost20150201MountTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['mount-targets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150201MountTargetsMutationOptions<TError, TOnMutateResult>(
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

export function getPost20150201FileSystemsSourceFileSystemIdReplicationConfigurationMutationKey() {
  return [
    '2015-02-01',
    '/2015-02-01/file-systems/:SourceFileSystemId/replication-configuration',
    'POST',
  ] as const
}

export function getPost20150201FileSystemsSourceFileSystemIdReplicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150201FileSystemsSourceFileSystemIdReplicationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':SourceFileSystemId'][
          'replication-configuration'
        ].$post(args, options),
      )
    },
  })
}

export function usePost20150201FileSystemsSourceFileSystemIdReplicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPost20150201FileSystemsSourceFileSystemIdReplicationConfigurationMutationOptions<
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

export function getDelete20150201FileSystemsSourceFileSystemIdReplicationConfigurationMutationKey() {
  return [
    '2015-02-01',
    '/2015-02-01/file-systems/:SourceFileSystemId/replication-configuration',
    'DELETE',
  ] as const
}

export function getDelete20150201FileSystemsSourceFileSystemIdReplicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20150201FileSystemsSourceFileSystemIdReplicationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':SourceFileSystemId'][
          'replication-configuration'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20150201FileSystemsSourceFileSystemIdReplicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDelete20150201FileSystemsSourceFileSystemIdReplicationConfigurationMutationOptions<
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

export function getPost20150201CreateTagsFileSystemIdMutationKey() {
  return ['2015-02-01', '/2015-02-01/create-tags/:FileSystemId', 'POST'] as const
}

export function getPost20150201CreateTagsFileSystemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-02-01']['create-tags'][':FileSystemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150201CreateTagsFileSystemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['create-tags'][':FileSystemId']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['create-tags'][':FileSystemId'].$post(args, options),
      )
    },
  })
}

export function usePost20150201CreateTagsFileSystemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['2015-02-01']['create-tags'][':FileSystemId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150201CreateTagsFileSystemIdMutationOptions<
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

export function getDelete20150201AccessPointsAccessPointIdMutationKey() {
  return ['2015-02-01', '/2015-02-01/access-points/:AccessPointId', 'DELETE'] as const
}

export function getDelete20150201AccessPointsAccessPointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-02-01']['access-points'][':AccessPointId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20150201AccessPointsAccessPointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['access-points'][':AccessPointId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['access-points'][':AccessPointId'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150201AccessPointsAccessPointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['access-points'][':AccessPointId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150201AccessPointsAccessPointIdMutationOptions<
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

export function getPut20150201FileSystemsFileSystemIdMutationKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId', 'PUT'] as const
}

export function getPut20150201FileSystemsFileSystemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20150201FileSystemsFileSystemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId'].$put(args, options),
      )
    },
  })
}

export function usePut20150201FileSystemsFileSystemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20150201FileSystemsFileSystemIdMutationOptions<
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

export function getDelete20150201FileSystemsFileSystemIdMutationKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId', 'DELETE'] as const
}

export function getDelete20150201FileSystemsFileSystemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20150201FileSystemsFileSystemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150201FileSystemsFileSystemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150201FileSystemsFileSystemIdMutationOptions<
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

export function get20150201FileSystemsFileSystemIdPolicyQueryKey(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/policy', keyArgs] as const
}

export function get20150201FileSystemsFileSystemIdPolicyQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20150201FileSystemsFileSystemIdPolicyQueryKey>
  >({
    queryKey: get20150201FileSystemsFileSystemIdPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId'].policy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201FileSystemsFileSystemIdPolicy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsFileSystemIdPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150201FileSystemsFileSystemIdPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150201FileSystemsFileSystemIdPolicy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsFileSystemIdPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150201FileSystemsFileSystemIdPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPut20150201FileSystemsFileSystemIdPolicyMutationKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/policy', 'PUT'] as const
}

export function getPut20150201FileSystemsFileSystemIdPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20150201FileSystemsFileSystemIdPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId'].policy.$put(args, options),
      )
    },
  })
}

export function usePut20150201FileSystemsFileSystemIdPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20150201FileSystemsFileSystemIdPolicyMutationOptions<
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

export function getDelete20150201FileSystemsFileSystemIdPolicyMutationKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/policy', 'DELETE'] as const
}

export function getDelete20150201FileSystemsFileSystemIdPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20150201FileSystemsFileSystemIdPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId'].policy.$delete(args, options),
      )
    },
  })
}

export function useDelete20150201FileSystemsFileSystemIdPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150201FileSystemsFileSystemIdPolicyMutationOptions<
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

export function getDelete20150201MountTargetsMountTargetIdMutationKey() {
  return ['2015-02-01', '/2015-02-01/mount-targets/:MountTargetId', 'DELETE'] as const
}

export function getDelete20150201MountTargetsMountTargetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20150201MountTargetsMountTargetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['mount-targets'][':MountTargetId'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150201MountTargetsMountTargetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150201MountTargetsMountTargetIdMutationOptions<
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

export function getPost20150201DeleteTagsFileSystemIdMutationKey() {
  return ['2015-02-01', '/2015-02-01/delete-tags/:FileSystemId', 'POST'] as const
}

export function getPost20150201DeleteTagsFileSystemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-02-01']['delete-tags'][':FileSystemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150201DeleteTagsFileSystemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['delete-tags'][':FileSystemId']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['delete-tags'][':FileSystemId'].$post(args, options),
      )
    },
  })
}

export function usePost20150201DeleteTagsFileSystemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['2015-02-01']['delete-tags'][':FileSystemId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150201DeleteTagsFileSystemIdMutationOptions<
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

export function get20150201AccountPreferencesQueryKey(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/account-preferences', keyArgs] as const
}

export function get20150201AccountPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150201AccountPreferencesQueryKey>
  >({
    queryKey: get20150201AccountPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['account-preferences'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201AccountPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201AccountPreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150201AccountPreferencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150201AccountPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201AccountPreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150201AccountPreferencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPut20150201AccountPreferencesMutationKey() {
  return ['2015-02-01', '/2015-02-01/account-preferences', 'PUT'] as const
}

export function getPut20150201AccountPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20150201AccountPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$put']>,
    ) {
      return parseResponse(client['2015-02-01']['account-preferences'].$put(args, options))
    },
  })
}

export function usePut20150201AccountPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2015-02-01']['account-preferences']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20150201AccountPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function get20150201FileSystemsFileSystemIdBackupPolicyQueryKey(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/backup-policy', keyArgs] as const
}

export function get20150201FileSystemsFileSystemIdBackupPolicyQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20150201FileSystemsFileSystemIdBackupPolicyQueryKey>
  >({
    queryKey: get20150201FileSystemsFileSystemIdBackupPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId']['backup-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201FileSystemsFileSystemIdBackupPolicy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsFileSystemIdBackupPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150201FileSystemsFileSystemIdBackupPolicyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150201FileSystemsFileSystemIdBackupPolicy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsFileSystemIdBackupPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150201FileSystemsFileSystemIdBackupPolicyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPut20150201FileSystemsFileSystemIdBackupPolicyMutationKey() {
  return ['2015-02-01', '/2015-02-01/file-systems/:FileSystemId/backup-policy', 'PUT'] as const
}

export function getPut20150201FileSystemsFileSystemIdBackupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20150201FileSystemsFileSystemIdBackupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId']['backup-policy'].$put(args, options),
      )
    },
  })
}

export function usePut20150201FileSystemsFileSystemIdBackupPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20150201FileSystemsFileSystemIdBackupPolicyMutationOptions<
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

export function get20150201FileSystemsFileSystemIdLifecycleConfigurationQueryKey(
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

export function get20150201FileSystemsFileSystemIdLifecycleConfigurationQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20150201FileSystemsFileSystemIdLifecycleConfigurationQueryKey>
  >({
    queryKey: get20150201FileSystemsFileSystemIdLifecycleConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function use20150201FileSystemsFileSystemIdLifecycleConfiguration<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsFileSystemIdLifecycleConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150201FileSystemsFileSystemIdLifecycleConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150201FileSystemsFileSystemIdLifecycleConfiguration<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsFileSystemIdLifecycleConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150201FileSystemsFileSystemIdLifecycleConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPut20150201FileSystemsFileSystemIdLifecycleConfigurationMutationKey() {
  return [
    '2015-02-01',
    '/2015-02-01/file-systems/:FileSystemId/lifecycle-configuration',
    'PUT',
  ] as const
}

export function getPut20150201FileSystemsFileSystemIdLifecycleConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20150201FileSystemsFileSystemIdLifecycleConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePut20150201FileSystemsFileSystemIdLifecycleConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPut20150201FileSystemsFileSystemIdLifecycleConfigurationMutationOptions<
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

export function get20150201MountTargetsMountTargetIdSecurityGroupsQueryKey(
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

export function get20150201MountTargetsMountTargetIdSecurityGroupsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20150201MountTargetsMountTargetIdSecurityGroupsQueryKey>
  >({
    queryKey: get20150201MountTargetsMountTargetIdSecurityGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['mount-targets'][':MountTargetId']['security-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201MountTargetsMountTargetIdSecurityGroups<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201MountTargetsMountTargetIdSecurityGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150201MountTargetsMountTargetIdSecurityGroupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150201MountTargetsMountTargetIdSecurityGroups<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201MountTargetsMountTargetIdSecurityGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150201MountTargetsMountTargetIdSecurityGroupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPut20150201MountTargetsMountTargetIdSecurityGroupsMutationKey() {
  return ['2015-02-01', '/2015-02-01/mount-targets/:MountTargetId/security-groups', 'PUT'] as const
}

export function getPut20150201MountTargetsMountTargetIdSecurityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20150201MountTargetsMountTargetIdSecurityGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['mount-targets'][':MountTargetId']['security-groups'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePut20150201MountTargetsMountTargetIdSecurityGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20150201MountTargetsMountTargetIdSecurityGroupsMutationOptions<
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

export function get20150201FileSystemsReplicationConfigurationsQueryKey(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/file-systems/replication-configurations', keyArgs] as const
}

export function get20150201FileSystemsReplicationConfigurationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20150201FileSystemsReplicationConfigurationsQueryKey>
  >({
    queryKey: get20150201FileSystemsReplicationConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['file-systems']['replication-configurations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201FileSystemsReplicationConfigurations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsReplicationConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150201FileSystemsReplicationConfigurationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150201FileSystemsReplicationConfigurations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20150201FileSystemsReplicationConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150201FileSystemsReplicationConfigurationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20150201TagsFileSystemIdIndexQueryKey(
  args: InferRequestType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/tags/:FileSystemId/', keyArgs] as const
}

export function get20150201TagsFileSystemIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150201TagsFileSystemIdIndexQueryKey>
  >({
    queryKey: get20150201TagsFileSystemIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01'].tags[':FileSystemId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201TagsFileSystemIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201TagsFileSystemIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150201TagsFileSystemIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150201TagsFileSystemIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201TagsFileSystemIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150201TagsFileSystemIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20150201ResourceTagsResourceIdQueryKey(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-02-01', '/2015-02-01/resource-tags/:ResourceId', keyArgs] as const
}

export function get20150201ResourceTagsResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150201ResourceTagsResourceIdQueryKey>
  >({
    queryKey: get20150201ResourceTagsResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-02-01']['resource-tags'][':ResourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20150201ResourceTagsResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201ResourceTagsResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150201ResourceTagsResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150201ResourceTagsResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20150201ResourceTagsResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150201ResourceTagsResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20150201ResourceTagsResourceIdMutationKey() {
  return ['2015-02-01', '/2015-02-01/resource-tags/:ResourceId', 'POST'] as const
}

export function getPost20150201ResourceTagsResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150201ResourceTagsResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['resource-tags'][':ResourceId'].$post(args, options),
      )
    },
  })
}

export function usePost20150201ResourceTagsResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150201ResourceTagsResourceIdMutationOptions<
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

export function getDelete20150201ResourceTagsResourceIdTagKeysMutationKey() {
  return ['2015-02-01', '/2015-02-01/resource-tags/:ResourceId#tagKeys', 'DELETE'] as const
}

export function getDelete20150201ResourceTagsResourceIdTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-02-01']['resource-tags'][':ResourceId#tagKeys']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20150201ResourceTagsResourceIdTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-02-01']['resource-tags'][':ResourceId#tagKeys']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-02-01']['resource-tags'][':ResourceId#tagKeys'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150201ResourceTagsResourceIdTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['2015-02-01']['resource-tags'][':ResourceId#tagKeys']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150201ResourceTagsResourceIdTagKeysMutationOptions<
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
