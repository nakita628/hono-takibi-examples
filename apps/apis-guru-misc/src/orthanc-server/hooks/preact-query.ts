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

export function getChangesQueryKey(args: InferRequestType<typeof client.changes.$get>) {
  return ['changes', '/changes', args] as const
}

export function getChangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.changes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChangesQueryKey>
  >({
    queryKey: getChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteChangesMutationKey() {
  return ['changes', '/changes', 'DELETE'] as const
}

export function getDeleteChangesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteChangesMutationKey(),
    async mutationFn() {
      return parseResponse(client.changes.$delete(undefined, options))
    },
  })
}

export function useDeleteChanges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChangesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExportsQueryKey(args: InferRequestType<typeof client.exports.$get>) {
  return ['exports', '/exports', args] as const
}

export function getExportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.exports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExportsQueryKey>
  >({
    queryKey: getExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.exports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.exports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteExportsMutationKey() {
  return ['exports', '/exports', 'DELETE'] as const
}

export function getDeleteExportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteExportsMutationKey(),
    async mutationFn() {
      return parseResponse(client.exports.$delete(undefined, options))
    },
  })
}

export function useDeleteExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInstancesQueryKey(args: InferRequestType<typeof client.instances.$get>) {
  return ['instances', '/instances', args] as const
}

export function getInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInstancesQueryKey>
  >({
    queryKey: getInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInstancesMutationKey() {
  return ['instances', '/instances', 'POST'] as const
}

export function getPostInstancesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>>,
    TError,
    InferRequestType<typeof client.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.instances.$post>) {
      return parseResponse(client.instances.$post(args, options))
    },
  })
}

export function usePostInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.instances.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstancesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInstancesIdQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['$get']>,
) {
  return ['instances', '/instances/:id', args] as const
}

export function getInstancesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdQueryKey>
  >({
    queryKey: getInstancesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInstancesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteInstancesIdMutationKey() {
  return ['instances', '/instances/:id', 'DELETE'] as const
}

export function getDeleteInstancesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instances)[':id']['$delete']>) {
      return parseResponse(client.instances[':id'].$delete(args, options))
    },
  })
}

export function useDeleteInstancesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInstancesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstancesIdAnonymizeMutationKey() {
  return ['instances', '/instances/:id/anonymize', 'POST'] as const
}

export function getPostInstancesIdAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdAnonymizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']>,
    ) {
      return parseResponse(client.instances[':id'].anonymize.$post(args, options))
    },
  })
}

export function usePostInstancesIdAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['anonymize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstancesIdAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>,
) {
  return ['instances', '/instances/:id/attachments', args] as const
}

export function getInstancesIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsQueryKey>
  >({
    queryKey: getInstancesIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsQueryKey>
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
      ...getInstancesIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsQueryKey>
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
      ...getInstancesIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name', keyArgs] as const
}

export function getInstancesIdAttachmentsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameQueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameQueryKey>
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
      ...getInstancesIdAttachmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameQueryKey>
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
      ...getInstancesIdAttachmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutInstancesIdAttachmentsNameMutationKey() {
  return ['instances', '/instances/:id/attachments/:name', 'PUT'] as const
}

export function getPutInstancesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstancesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>,
    ) {
      return parseResponse(client.instances[':id'].attachments[':name'].$put(args, options))
    },
  })
}

export function usePutInstancesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstancesIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInstancesIdAttachmentsNameMutationKey() {
  return ['instances', '/instances/:id/attachments/:name', 'DELETE'] as const
}

export function getDeleteInstancesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>,
    ) {
      return parseResponse(client.instances[':id'].attachments[':name'].$delete(args, options))
    },
  })
}

export function useDeleteInstancesIdAttachmentsName<
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
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInstancesIdAttachmentsNameMutationOptions<
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

export function getPostInstancesIdAttachmentsNameCompressMutationKey() {
  return ['instances', '/instances/:id/attachments/:name/compress', 'POST'] as const
}

export function getPostInstancesIdAttachmentsNameCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['compress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdAttachmentsNameCompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
      >,
    ) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].compress.$post(args, options),
      )
    },
  })
}

export function usePostInstancesIdAttachmentsNameCompress<
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
                  (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
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
  const mutationDefaults = getPostInstancesIdAttachmentsNameCompressMutationOptions<
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

export function getInstancesIdAttachmentsNameCompressedDataQueryKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function getInstancesIdAttachmentsNameCompressedDataQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameCompressedDataQueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameCompressedDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['compressed-data'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsNameCompressedData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameCompressedDataQueryKey>
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
      ...getInstancesIdAttachmentsNameCompressedDataQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsNameCompressedData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameCompressedDataQueryKey>
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
      ...getInstancesIdAttachmentsNameCompressedDataQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameCompressedMd5QueryKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function getInstancesIdAttachmentsNameCompressedMd5QueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameCompressedMd5QueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameCompressedMd5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['compressed-md5'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameCompressedMd5QueryKey>
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
      ...getInstancesIdAttachmentsNameCompressedMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameCompressedMd5QueryKey>
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
      ...getInstancesIdAttachmentsNameCompressedMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameCompressedSizeQueryKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function getInstancesIdAttachmentsNameCompressedSizeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameCompressedSizeQueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameCompressedSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['compressed-size'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsNameCompressedSize<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameCompressedSizeQueryKey>
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
      ...getInstancesIdAttachmentsNameCompressedSizeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsNameCompressedSize<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameCompressedSizeQueryKey>
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
      ...getInstancesIdAttachmentsNameCompressedSizeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameDataQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/data', keyArgs] as const
}

export function getInstancesIdAttachmentsNameDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameDataQueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameDataQueryKey>
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
      ...getInstancesIdAttachmentsNameDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameDataQueryKey>
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
      ...getInstancesIdAttachmentsNameDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameInfoQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/info', keyArgs] as const
}

export function getInstancesIdAttachmentsNameInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameInfoQueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameInfoQueryKey>
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
      ...getInstancesIdAttachmentsNameInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameInfoQueryKey>
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
      ...getInstancesIdAttachmentsNameInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameIsCompressedQueryKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function getInstancesIdAttachmentsNameIsCompressedQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameIsCompressedQueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameIsCompressedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['is-compressed'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsNameIsCompressed<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameIsCompressedQueryKey>
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
      ...getInstancesIdAttachmentsNameIsCompressedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsNameIsCompressed<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameIsCompressedQueryKey>
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
      ...getInstancesIdAttachmentsNameIsCompressedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameMd5QueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/md5', keyArgs] as const
}

export function getInstancesIdAttachmentsNameMd5QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameMd5QueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameMd5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].md5.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameMd5QueryKey>
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
      ...getInstancesIdAttachmentsNameMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameMd5QueryKey>
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
      ...getInstancesIdAttachmentsNameMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdAttachmentsNameSizeQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/attachments/:name/size', keyArgs] as const
}

export function getInstancesIdAttachmentsNameSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdAttachmentsNameSizeQueryKey>
  >({
    queryKey: getInstancesIdAttachmentsNameSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].size.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameSizeQueryKey>
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
      ...getInstancesIdAttachmentsNameSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdAttachmentsNameSizeQueryKey>
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
      ...getInstancesIdAttachmentsNameSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostInstancesIdAttachmentsNameUncompressMutationKey() {
  return ['instances', '/instances/:id/attachments/:name/uncompress', 'POST'] as const
}

export function getPostInstancesIdAttachmentsNameUncompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdAttachmentsNameUncompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
      >,
    ) {
      return parseResponse(
        client.instances[':id'].attachments[':name'].uncompress.$post(args, options),
      )
    },
  })
}

export function usePostInstancesIdAttachmentsNameUncompress<
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
                  (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
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
  const mutationDefaults = getPostInstancesIdAttachmentsNameUncompressMutationOptions<
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

export function getPostInstancesIdAttachmentsNameVerifyMd5MutationKey() {
  return ['instances', '/instances/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function getPostInstancesIdAttachmentsNameVerifyMd5MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdAttachmentsNameVerifyMd5MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
      >,
    ) {
      return parseResponse(
        client.instances[':id'].attachments[':name']['verify-md5'].$post(args, options),
      )
    },
  })
}

export function usePostInstancesIdAttachmentsNameVerifyMd5<
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
                  (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
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
  const mutationDefaults = getPostInstancesIdAttachmentsNameVerifyMd5MutationOptions<
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

export function getInstancesIdContentQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['content']['$get']>,
) {
  return ['instances', '/instances/:id/content', args] as const
}

export function getInstancesIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdContentQueryKey>
  >({
    queryKey: getInstancesIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['content']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdContentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['content']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdContentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInstancesIdExportMutationKey() {
  return ['instances', '/instances/:id/export', 'POST'] as const
}

export function getPostInstancesIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instances)[':id']['export']['$post']>) {
      return parseResponse(client.instances[':id'].export.$post(args, options))
    },
  })
}

export function usePostInstancesIdExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstancesIdExportMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesIdFileQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['file']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/file', keyArgs] as const
}

export function getInstancesIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFileQueryKey>
  >({
    queryKey: getInstancesIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].file.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInstancesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['file']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdFileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['file']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['file']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdFileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdFramesQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames']['$get']>,
) {
  return ['instances', '/instances/:id/frames', args] as const
}

export function getInstancesIdFramesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesQueryKey>
  >({
    queryKey: getInstancesIdFramesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFrames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdFramesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdFrames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['frames']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdFramesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdFramesFrameQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame', args] as const
}

export function getInstancesIdFramesFrameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameQueryKey>
  >({
    queryKey: getInstancesIdFramesFrameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrame<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameQueryKey>
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
      ...getInstancesIdFramesFrameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrame<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameQueryKey>
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
      ...getInstancesIdFramesFrameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameImageInt16QueryKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/image-int16', keyArgs] as const
}

export function getInstancesIdFramesFrameImageInt16QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameImageInt16QueryKey>
  >({
    queryKey: getInstancesIdFramesFrameImageInt16QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame']['image-int16'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrameImageInt16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameImageInt16QueryKey>
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
      ...getInstancesIdFramesFrameImageInt16QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrameImageInt16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameImageInt16QueryKey>
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
      ...getInstancesIdFramesFrameImageInt16QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameImageUint16QueryKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/image-uint16', keyArgs] as const
}

export function getInstancesIdFramesFrameImageUint16QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameImageUint16QueryKey>
  >({
    queryKey: getInstancesIdFramesFrameImageUint16QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame']['image-uint16'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrameImageUint16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameImageUint16QueryKey>
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
      ...getInstancesIdFramesFrameImageUint16QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrameImageUint16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameImageUint16QueryKey>
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
      ...getInstancesIdFramesFrameImageUint16QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameImageUint8QueryKey(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/image-uint8', keyArgs] as const
}

export function getInstancesIdFramesFrameImageUint8QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameImageUint8QueryKey>
  >({
    queryKey: getInstancesIdFramesFrameImageUint8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame']['image-uint8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrameImageUint8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameImageUint8QueryKey>
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
      ...getInstancesIdFramesFrameImageUint8QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrameImageUint8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameImageUint8QueryKey>
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
      ...getInstancesIdFramesFrameImageUint8QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameMatlabQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame/matlab', args] as const
}

export function getInstancesIdFramesFrameMatlabQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameMatlabQueryKey>
  >({
    queryKey: getInstancesIdFramesFrameMatlabQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].matlab.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrameMatlab<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameMatlabQueryKey>
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
      ...getInstancesIdFramesFrameMatlabQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrameMatlab<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameMatlabQueryKey>
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
      ...getInstancesIdFramesFrameMatlabQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameNumpyQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame/numpy', args] as const
}

export function getInstancesIdFramesFrameNumpyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameNumpyQueryKey>
  >({
    queryKey: getInstancesIdFramesFrameNumpyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].numpy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrameNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameNumpyQueryKey>
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
      ...getInstancesIdFramesFrameNumpyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrameNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameNumpyQueryKey>
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
      ...getInstancesIdFramesFrameNumpyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFramePreviewQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/preview', keyArgs] as const
}

export function getInstancesIdFramesFramePreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFramePreviewQueryKey>
  >({
    queryKey: getInstancesIdFramesFramePreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFramePreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFramePreviewQueryKey>
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
      ...getInstancesIdFramesFramePreviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFramePreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFramePreviewQueryKey>
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
      ...getInstancesIdFramesFramePreviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameRawQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame/raw', args] as const
}

export function getInstancesIdFramesFrameRawQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameRawQueryKey>
  >({
    queryKey: getInstancesIdFramesFrameRawQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].raw.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrameRaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameRawQueryKey>
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
      ...getInstancesIdFramesFrameRawQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrameRaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameRawQueryKey>
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
      ...getInstancesIdFramesFrameRawQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameRawGzQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>,
) {
  return ['instances', '/instances/:id/frames/:frame/raw.gz', args] as const
}

export function getInstancesIdFramesFrameRawGzQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameRawGzQueryKey>
  >({
    queryKey: getInstancesIdFramesFrameRawGzQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame']['raw.gz'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrameRawGz<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameRawGzQueryKey>
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
      ...getInstancesIdFramesFrameRawGzQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrameRawGz<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameRawGzQueryKey>
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
      ...getInstancesIdFramesFrameRawGzQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdFramesFrameRenderedQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/frames/:frame/rendered', keyArgs] as const
}

export function getInstancesIdFramesFrameRenderedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdFramesFrameRenderedQueryKey>
  >({
    queryKey: getInstancesIdFramesFrameRenderedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].frames[':frame'].rendered.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdFramesFrameRendered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameRenderedQueryKey>
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
      ...getInstancesIdFramesFrameRenderedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdFramesFrameRendered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdFramesFrameRenderedQueryKey>
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
      ...getInstancesIdFramesFrameRenderedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdHeaderQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['header']['$get']>,
) {
  return ['instances', '/instances/:id/header', args] as const
}

export function getInstancesIdHeaderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['header']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdHeaderQueryKey>
  >({
    queryKey: getInstancesIdHeaderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].header.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdHeader<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['header']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdHeaderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdHeaderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdHeader<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['header']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['header']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdHeaderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdHeaderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdImageInt16QueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/image-int16', keyArgs] as const
}

export function getInstancesIdImageInt16QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdImageInt16QueryKey>
  >({
    queryKey: getInstancesIdImageInt16QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id']['image-int16'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdImageInt16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdImageInt16QueryKey>
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
      ...getInstancesIdImageInt16QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdImageInt16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['image-int16']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdImageInt16QueryKey>
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
      ...getInstancesIdImageInt16QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdImageUint16QueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/image-uint16', keyArgs] as const
}

export function getInstancesIdImageUint16QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdImageUint16QueryKey>
  >({
    queryKey: getInstancesIdImageUint16QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id']['image-uint16'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdImageUint16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdImageUint16QueryKey>
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
      ...getInstancesIdImageUint16QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdImageUint16<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['image-uint16']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdImageUint16QueryKey>
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
      ...getInstancesIdImageUint16QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdImageUint8QueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/image-uint8', keyArgs] as const
}

export function getInstancesIdImageUint8QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdImageUint8QueryKey>
  >({
    queryKey: getInstancesIdImageUint8QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id']['image-uint8'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdImageUint8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdImageUint8QueryKey>
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
      ...getInstancesIdImageUint8QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdImageUint8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['image-uint8']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdImageUint8QueryKey>
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
      ...getInstancesIdImageUint8QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdMatlabQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>,
) {
  return ['instances', '/instances/:id/matlab', args] as const
}

export function getInstancesIdMatlabQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdMatlabQueryKey>
  >({
    queryKey: getInstancesIdMatlabQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].matlab.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdMatlab<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdMatlabQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdMatlabQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdMatlab<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['matlab']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdMatlabQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdMatlabQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdMetadataQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>,
) {
  return ['instances', '/instances/:id/metadata', args] as const
}

export function getInstancesIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdMetadataQueryKey>
  >({
    queryKey: getInstancesIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdMetadataNameQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/metadata/:name', keyArgs] as const
}

export function getInstancesIdMetadataNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdMetadataNameQueryKey>
  >({
    queryKey: getInstancesIdMetadataNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].metadata[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdMetadataNameQueryKey>
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
      ...getInstancesIdMetadataNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdMetadataNameQueryKey>
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
      ...getInstancesIdMetadataNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutInstancesIdMetadataNameMutationKey() {
  return ['instances', '/instances/:id/metadata/:name', 'PUT'] as const
}

export function getPutInstancesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInstancesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']>,
    ) {
      return parseResponse(client.instances[':id'].metadata[':name'].$put(args, options))
    },
  })
}

export function usePutInstancesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInstancesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInstancesIdMetadataNameMutationKey() {
  return ['instances', '/instances/:id/metadata/:name', 'DELETE'] as const
}

export function getDeleteInstancesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInstancesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>,
    ) {
      return parseResponse(client.instances[':id'].metadata[':name'].$delete(args, options))
    },
  })
}

export function useDeleteInstancesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInstancesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostInstancesIdModifyMutationKey() {
  return ['instances', '/instances/:id/modify', 'POST'] as const
}

export function getPostInstancesIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['modify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.instances)[':id']['modify']['$post']>) {
      return parseResponse(client.instances[':id'].modify.$post(args, options))
    },
  })
}

export function usePostInstancesIdModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['modify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['modify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstancesIdModifyMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesIdModuleQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['module']['$get']>,
) {
  return ['instances', '/instances/:id/module', args] as const
}

export function getInstancesIdModuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['module']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdModuleQueryKey>
  >({
    queryKey: getInstancesIdModuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].module.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['module']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdModuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdModuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['module']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['module']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdModuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdModuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdNumpyQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>,
) {
  return ['instances', '/instances/:id/numpy', args] as const
}

export function getInstancesIdNumpyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdNumpyQueryKey>
  >({
    queryKey: getInstancesIdNumpyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].numpy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdNumpyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdNumpyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['numpy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdNumpyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdNumpyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdPatientQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['patient']['$get']>,
) {
  return ['instances', '/instances/:id/patient', args] as const
}

export function getInstancesIdPatientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['patient']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdPatientQueryKey>
  >({
    queryKey: getInstancesIdPatientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].patient.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['patient']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdPatientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdPatientQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['patient']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['patient']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdPatientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdPatientQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdPdfQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>,
) {
  return ['instances', '/instances/:id/pdf', args] as const
}

export function getInstancesIdPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdPdfQueryKey>
  >({
    queryKey: getInstancesIdPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].pdf.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInstancesIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdPdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdPdfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdPdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdPdfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdPreviewQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['preview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/preview', keyArgs] as const
}

export function getInstancesIdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdPreviewQueryKey>
  >({
    queryKey: getInstancesIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInstancesIdReconstructMutationKey() {
  return ['instances', '/instances/:id/reconstruct', 'POST'] as const
}

export function getPostInstancesIdReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInstancesIdReconstructMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']>,
    ) {
      return parseResponse(client.instances[':id'].reconstruct.$post(args, options))
    },
  })
}

export function usePostInstancesIdReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['reconstruct']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInstancesIdReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getInstancesIdRenderedQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['instances', '/instances/:id/rendered', keyArgs] as const
}

export function getInstancesIdRenderedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdRenderedQueryKey>
  >({
    queryKey: getInstancesIdRenderedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].rendered.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdRendered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdRenderedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdRenderedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdRendered<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['rendered']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdRenderedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdRenderedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdSeriesQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['series']['$get']>,
) {
  return ['instances', '/instances/:id/series', args] as const
}

export function getInstancesIdSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdSeriesQueryKey>
  >({
    queryKey: getInstancesIdSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['series']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['series']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdSimplifiedTagsQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>,
) {
  return ['instances', '/instances/:id/simplified-tags', args] as const
}

export function getInstancesIdSimplifiedTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdSimplifiedTagsQueryKey>
  >({
    queryKey: getInstancesIdSimplifiedTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id']['simplified-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdSimplifiedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdSimplifiedTagsQueryKey>
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
      ...getInstancesIdSimplifiedTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdSimplifiedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['simplified-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdSimplifiedTagsQueryKey>
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
      ...getInstancesIdSimplifiedTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdStatisticsQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>,
) {
  return ['instances', '/instances/:id/statistics', args] as const
}

export function getInstancesIdStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdStatisticsQueryKey>
  >({
    queryKey: getInstancesIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdStatisticsQueryKey>
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
      ...getInstancesIdStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstancesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdStatisticsQueryKey>
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
      ...getInstancesIdStatisticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInstancesIdStudyQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['study']['$get']>,
) {
  return ['instances', '/instances/:id/study', args] as const
}

export function getInstancesIdStudyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['study']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdStudyQueryKey>
  >({
    queryKey: getInstancesIdStudyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].study.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInstancesIdStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['study']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdStudyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdStudyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['study']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['study']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdStudyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdStudyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInstancesIdTagsQueryKey(
  args: InferRequestType<(typeof client.instances)[':id']['tags']['$get']>,
) {
  return ['instances', '/instances/:id/tags', args] as const
}

export function getInstancesIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstancesIdTagsQueryKey>
  >({
    queryKey: getInstancesIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.instances[':id'].tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInstancesIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstancesIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstancesIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.instances)[':id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.instances)[':id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstancesIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstancesIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJobsQueryKey(args: InferRequestType<typeof client.jobs.$get>) {
  return ['jobs', '/jobs', args] as const
}

export function getJobsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >({
    queryKey: getJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJobsIdQueryKey(args: InferRequestType<(typeof client.jobs)[':id']['$get']>) {
  return ['jobs', '/jobs/:id', args] as const
}

export function getJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.jobs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdQueryKey>
  >({
    queryKey: getJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostJobsIdCancelMutationKey() {
  return ['jobs', '/jobs/:id/cancel', 'POST'] as const
}

export function getPostJobsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']>) {
      return parseResponse(client.jobs[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostJobsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.jobs)[':id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostJobsIdPauseMutationKey() {
  return ['jobs', '/jobs/:id/pause', 'POST'] as const
}

export function getPostJobsIdPauseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['pause']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdPauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['pause']['$post']>) {
      return parseResponse(client.jobs[':id'].pause.$post(args, options))
    },
  })
}

export function usePostJobsIdPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['pause']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.jobs)[':id']['pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsIdPauseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJobsIdResubmitMutationKey() {
  return ['jobs', '/jobs/:id/resubmit', 'POST'] as const
}

export function getPostJobsIdResubmitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['resubmit']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdResubmitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']>) {
      return parseResponse(client.jobs[':id'].resubmit.$post(args, options))
    },
  })
}

export function usePostJobsIdResubmit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.jobs)[':id']['resubmit']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsIdResubmitMutationOptions<TError, TOnMutateResult>(
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

export function getPostJobsIdResumeMutationKey() {
  return ['jobs', '/jobs/:id/resume', 'POST'] as const
}

export function getPostJobsIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['resume']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['resume']['$post']>) {
      return parseResponse(client.jobs[':id'].resume.$post(args, options))
    },
  })
}

export function usePostJobsIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.jobs)[':id']['resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.jobs)[':id']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsIdResumeMutationOptions<TError, TOnMutateResult>(
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

export function getJobsIdKeyQueryKey(
  args: InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>,
) {
  return ['jobs', '/jobs/:id/:key', args] as const
}

export function getJobsIdKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdKeyQueryKey>
  >({
    queryKey: getJobsIdKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':id'][':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJobsIdKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsIdKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJobsIdKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJobsIdKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id'][':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsIdKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJobsIdKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getModalitiesQueryKey(args: InferRequestType<typeof client.modalities.$get>) {
  return ['modalities', '/modalities', args] as const
}

export function getModalitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.modalities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModalitiesQueryKey>
  >({
    queryKey: getModalitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.modalities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useModalities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.modalities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getModalitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getModalitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseModalities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.modalities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modalities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getModalitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getModalitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getModalitiesIdQueryKey(
  args: InferRequestType<(typeof client.modalities)[':id']['$get']>,
) {
  return ['modalities', '/modalities/:id', args] as const
}

export function getModalitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.modalities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModalitiesIdQueryKey>
  >({
    queryKey: getModalitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.modalities[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useModalitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.modalities)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModalitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getModalitiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseModalitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.modalities)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModalitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getModalitiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutModalitiesIdMutationKey() {
  return ['modalities', '/modalities/:id', 'PUT'] as const
}

export function getPutModalitiesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutModalitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['$put']>) {
      return parseResponse(client.modalities[':id'].$put(args, options))
    },
  })
}

export function usePutModalitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutModalitiesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteModalitiesIdMutationKey() {
  return ['modalities', '/modalities/:id', 'DELETE'] as const
}

export function getDeleteModalitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModalitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['$delete']>) {
      return parseResponse(client.modalities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteModalitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.modalities)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteModalitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getModalitiesIdConfigurationQueryKey(
  args: InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>,
) {
  return ['modalities', '/modalities/:id/configuration', args] as const
}

export function getModalitiesIdConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModalitiesIdConfigurationQueryKey>
  >({
    queryKey: getModalitiesIdConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.modalities[':id'].configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useModalitiesIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModalitiesIdConfigurationQueryKey>
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
      ...getModalitiesIdConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseModalitiesIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModalitiesIdConfigurationQueryKey>
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
      ...getModalitiesIdConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostModalitiesIdEchoMutationKey() {
  return ['modalities', '/modalities/:id/echo', 'POST'] as const
}

export function getPostModalitiesIdEchoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['echo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['echo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdEchoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['echo']['$post']>) {
      return parseResponse(client.modalities[':id'].echo.$post(args, options))
    },
  })
}

export function usePostModalitiesIdEcho<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['echo']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['echo']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdEchoMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindMutationKey() {
  return ['modalities', '/modalities/:id/find', 'POST'] as const
}

export function getPostModalitiesIdFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['find']['$post']>) {
      return parseResponse(client.modalities[':id'].find.$post(args, options))
    },
  })
}

export function usePostModalitiesIdFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['find']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['find']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdFindMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindInstanceMutationKey() {
  return ['modalities', '/modalities/:id/find-instance', 'POST'] as const
}

export function getPostModalitiesIdFindInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-instance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-instance'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['find-instance']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdFindInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindPatientMutationKey() {
  return ['modalities', '/modalities/:id/find-patient', 'POST'] as const
}

export function getPostModalitiesIdFindPatientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-patient']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindPatientMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-patient'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindPatient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['find-patient']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdFindPatientMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindSeriesMutationKey() {
  return ['modalities', '/modalities/:id/find-series', 'POST'] as const
}

export function getPostModalitiesIdFindSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-series']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindSeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-series'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['find-series']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdFindSeriesMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindStudyMutationKey() {
  return ['modalities', '/modalities/:id/find-study', 'POST'] as const
}

export function getPostModalitiesIdFindStudyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-study']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindStudyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-study'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindStudy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['find-study']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdFindStudyMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdFindWorklistMutationKey() {
  return ['modalities', '/modalities/:id/find-worklist', 'POST'] as const
}

export function getPostModalitiesIdFindWorklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['find-worklist']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdFindWorklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['find-worklist'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdFindWorklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['find-worklist']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdFindWorklistMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdMoveMutationKey() {
  return ['modalities', '/modalities/:id/move', 'POST'] as const
}

export function getPostModalitiesIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['move']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdMoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['move']['$post']>) {
      return parseResponse(client.modalities[':id'].move.$post(args, options))
    },
  })
}

export function usePostModalitiesIdMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['move']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['move']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdMoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdQueryMutationKey() {
  return ['modalities', '/modalities/:id/query', 'POST'] as const
}

export function getPostModalitiesIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['query']['$post']>) {
      return parseResponse(client.modalities[':id'].query.$post(args, options))
    },
  })
}

export function usePostModalitiesIdQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdStorageCommitmentMutationKey() {
  return ['modalities', '/modalities/:id/storage-commitment', 'POST'] as const
}

export function getPostModalitiesIdStorageCommitmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['storage-commitment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdStorageCommitmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['storage-commitment'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdStorageCommitment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['storage-commitment']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdStorageCommitmentMutationOptions<
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

export function getPostModalitiesIdStoreMutationKey() {
  return ['modalities', '/modalities/:id/store', 'POST'] as const
}

export function getPostModalitiesIdStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['store']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['store']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdStoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.modalities)[':id']['store']['$post']>) {
      return parseResponse(client.modalities[':id'].store.$post(args, options))
    },
  })
}

export function usePostModalitiesIdStore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['store']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['store']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdStoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostModalitiesIdStoreStraightMutationKey() {
  return ['modalities', '/modalities/:id/store-straight', 'POST'] as const
}

export function getPostModalitiesIdStoreStraightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.modalities)[':id']['store-straight']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModalitiesIdStoreStraightMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']>,
    ) {
      return parseResponse(client.modalities[':id']['store-straight'].$post(args, options))
    },
  })
}

export function usePostModalitiesIdStoreStraight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.modalities)[':id']['store-straight']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModalitiesIdStoreStraightMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsQueryKey(args: InferRequestType<typeof client.patients.$get>) {
  return ['patients', '/patients', args] as const
}

export function getPatientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.patients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPatientsQueryKey>
  >({
    queryKey: getPatientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePatients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.patients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPatientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.patients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patients.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPatientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatientsIdQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['$get']>,
) {
  return ['patients', '/patients/:id', args] as const
}

export function getPatientsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.patients)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdQueryKey>
  >({
    queryKey: getPatientsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePatientsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeletePatientsIdMutationKey() {
  return ['patients', '/patients/:id', 'DELETE'] as const
}

export function getDeletePatientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePatientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['$delete']>) {
      return parseResponse(client.patients[':id'].$delete(args, options))
    },
  })
}

export function useDeletePatientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePatientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPatientsIdAnonymizeMutationKey() {
  return ['patients', '/patients/:id/anonymize', 'POST'] as const
}

export function getPostPatientsIdAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdAnonymizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']>,
    ) {
      return parseResponse(client.patients[':id'].anonymize.$post(args, options))
    },
  })
}

export function usePostPatientsIdAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['anonymize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPatientsIdAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdArchiveQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$get']>,
) {
  return ['patients', '/patients/:id/archive', args] as const
}

export function getPatientsIdArchiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdArchiveQueryKey>
  >({
    queryKey: getPatientsIdArchiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].archive.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdArchiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdArchiveQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdArchiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdArchiveQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPatientsIdArchiveMutationKey() {
  return ['patients', '/patients/:id/archive', 'POST'] as const
}

export function getPostPatientsIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['archive']['$post']>) {
      return parseResponse(client.patients[':id'].archive.$post(args, options))
    },
  })
}

export function usePostPatientsIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPatientsIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>,
) {
  return ['patients', '/patients/:id/attachments', args] as const
}

export function getPatientsIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsQueryKey>
  >({
    queryKey: getPatientsIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsQueryKey>
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
      ...getPatientsIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsQueryKey>
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
      ...getPatientsIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name', keyArgs] as const
}

export function getPatientsIdAttachmentsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameQueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameQueryKey>
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
      ...getPatientsIdAttachmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameQueryKey>
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
      ...getPatientsIdAttachmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPatientsIdAttachmentsNameMutationKey() {
  return ['patients', '/patients/:id/attachments/:name', 'PUT'] as const
}

export function getPutPatientsIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPatientsIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>,
    ) {
      return parseResponse(client.patients[':id'].attachments[':name'].$put(args, options))
    },
  })
}

export function usePutPatientsIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPatientsIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePatientsIdAttachmentsNameMutationKey() {
  return ['patients', '/patients/:id/attachments/:name', 'DELETE'] as const
}

export function getDeletePatientsIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePatientsIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>,
    ) {
      return parseResponse(client.patients[':id'].attachments[':name'].$delete(args, options))
    },
  })
}

export function useDeletePatientsIdAttachmentsName<
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
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePatientsIdAttachmentsNameMutationOptions<
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

export function getPostPatientsIdAttachmentsNameCompressMutationKey() {
  return ['patients', '/patients/:id/attachments/:name/compress', 'POST'] as const
}

export function getPostPatientsIdAttachmentsNameCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['compress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdAttachmentsNameCompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.patients)[':id']['attachments'][':name']['compress']['$post']
      >,
    ) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].compress.$post(args, options),
      )
    },
  })
}

export function usePostPatientsIdAttachmentsNameCompress<
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
                  (typeof client.patients)[':id']['attachments'][':name']['compress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.patients)[':id']['attachments'][':name']['compress']['$post']
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
  const mutationDefaults = getPostPatientsIdAttachmentsNameCompressMutationOptions<
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

export function getPatientsIdAttachmentsNameCompressedDataQueryKey(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function getPatientsIdAttachmentsNameCompressedDataQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameCompressedDataQueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameCompressedDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['compressed-data'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsNameCompressedData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameCompressedDataQueryKey>
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
      ...getPatientsIdAttachmentsNameCompressedDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsNameCompressedData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameCompressedDataQueryKey>
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
      ...getPatientsIdAttachmentsNameCompressedDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameCompressedMd5QueryKey(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function getPatientsIdAttachmentsNameCompressedMd5QueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameCompressedMd5QueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameCompressedMd5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['compressed-md5'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsNameCompressedMd5<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameCompressedMd5QueryKey>
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
      ...getPatientsIdAttachmentsNameCompressedMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsNameCompressedMd5<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameCompressedMd5QueryKey>
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
      ...getPatientsIdAttachmentsNameCompressedMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameCompressedSizeQueryKey(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function getPatientsIdAttachmentsNameCompressedSizeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameCompressedSizeQueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameCompressedSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['compressed-size'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsNameCompressedSize<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameCompressedSizeQueryKey>
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
      ...getPatientsIdAttachmentsNameCompressedSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsNameCompressedSize<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameCompressedSizeQueryKey>
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
      ...getPatientsIdAttachmentsNameCompressedSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameDataQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/data', keyArgs] as const
}

export function getPatientsIdAttachmentsNameDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameDataQueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameDataQueryKey>
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
      ...getPatientsIdAttachmentsNameDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameDataQueryKey>
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
      ...getPatientsIdAttachmentsNameDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameInfoQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/info', keyArgs] as const
}

export function getPatientsIdAttachmentsNameInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameInfoQueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameInfoQueryKey>
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
      ...getPatientsIdAttachmentsNameInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameInfoQueryKey>
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
      ...getPatientsIdAttachmentsNameInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameIsCompressedQueryKey(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function getPatientsIdAttachmentsNameIsCompressedQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameIsCompressedQueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameIsCompressedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['is-compressed'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsNameIsCompressed<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameIsCompressedQueryKey>
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
      ...getPatientsIdAttachmentsNameIsCompressedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsNameIsCompressed<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameIsCompressedQueryKey>
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
      ...getPatientsIdAttachmentsNameIsCompressedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameMd5QueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/md5', keyArgs] as const
}

export function getPatientsIdAttachmentsNameMd5QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameMd5QueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameMd5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].md5.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameMd5QueryKey>
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
      ...getPatientsIdAttachmentsNameMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameMd5QueryKey>
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
      ...getPatientsIdAttachmentsNameMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdAttachmentsNameSizeQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/attachments/:name/size', keyArgs] as const
}

export function getPatientsIdAttachmentsNameSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdAttachmentsNameSizeQueryKey>
  >({
    queryKey: getPatientsIdAttachmentsNameSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].size.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameSizeQueryKey>
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
      ...getPatientsIdAttachmentsNameSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdAttachmentsNameSizeQueryKey>
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
      ...getPatientsIdAttachmentsNameSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPatientsIdAttachmentsNameUncompressMutationKey() {
  return ['patients', '/patients/:id/attachments/:name/uncompress', 'POST'] as const
}

export function getPostPatientsIdAttachmentsNameUncompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdAttachmentsNameUncompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
      >,
    ) {
      return parseResponse(
        client.patients[':id'].attachments[':name'].uncompress.$post(args, options),
      )
    },
  })
}

export function usePostPatientsIdAttachmentsNameUncompress<
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
                  (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
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
  const mutationDefaults = getPostPatientsIdAttachmentsNameUncompressMutationOptions<
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

export function getPostPatientsIdAttachmentsNameVerifyMd5MutationKey() {
  return ['patients', '/patients/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function getPostPatientsIdAttachmentsNameVerifyMd5MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdAttachmentsNameVerifyMd5MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
      >,
    ) {
      return parseResponse(
        client.patients[':id'].attachments[':name']['verify-md5'].$post(args, options),
      )
    },
  })
}

export function usePostPatientsIdAttachmentsNameVerifyMd5<
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
                  (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
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
  const mutationDefaults = getPostPatientsIdAttachmentsNameVerifyMd5MutationOptions<
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

export function getPatientsIdInstancesQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['instances']['$get']>,
) {
  return ['patients', '/patients/:id/instances', args] as const
}

export function getPatientsIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdInstancesQueryKey>
  >({
    queryKey: getPatientsIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatientsIdInstancesTagsQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>,
) {
  return ['patients', '/patients/:id/instances-tags', args] as const
}

export function getPatientsIdInstancesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdInstancesTagsQueryKey>
  >({
    queryKey: getPatientsIdInstancesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id']['instances-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdInstancesTagsQueryKey>
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
      ...getPatientsIdInstancesTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['instances-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdInstancesTagsQueryKey>
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
      ...getPatientsIdInstancesTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatientsIdMediaQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$get']>,
) {
  return ['patients', '/patients/:id/media', args] as const
}

export function getPatientsIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdMediaQueryKey>
  >({
    queryKey: getPatientsIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].media.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePatientsIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPatientsIdMediaMutationKey() {
  return ['patients', '/patients/:id/media', 'POST'] as const
}

export function getPostPatientsIdMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['media']['$post']>) {
      return parseResponse(client.patients[':id'].media.$post(args, options))
    },
  })
}

export function usePostPatientsIdMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['media']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['media']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPatientsIdMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdMetadataQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>,
) {
  return ['patients', '/patients/:id/metadata', args] as const
}

export function getPatientsIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdMetadataQueryKey>
  >({
    queryKey: getPatientsIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatientsIdMetadataNameQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['patients', '/patients/:id/metadata/:name', keyArgs] as const
}

export function getPatientsIdMetadataNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdMetadataNameQueryKey>
  >({
    queryKey: getPatientsIdMetadataNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].metadata[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdMetadataNameQueryKey>
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
      ...getPatientsIdMetadataNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientsIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdMetadataNameQueryKey>
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
      ...getPatientsIdMetadataNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPatientsIdMetadataNameMutationKey() {
  return ['patients', '/patients/:id/metadata/:name', 'PUT'] as const
}

export function getPutPatientsIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPatientsIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']>,
    ) {
      return parseResponse(client.patients[':id'].metadata[':name'].$put(args, options))
    },
  })
}

export function usePutPatientsIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPatientsIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePatientsIdMetadataNameMutationKey() {
  return ['patients', '/patients/:id/metadata/:name', 'DELETE'] as const
}

export function getDeletePatientsIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePatientsIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>,
    ) {
      return parseResponse(client.patients[':id'].metadata[':name'].$delete(args, options))
    },
  })
}

export function useDeletePatientsIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePatientsIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostPatientsIdModifyMutationKey() {
  return ['patients', '/patients/:id/modify', 'POST'] as const
}

export function getPostPatientsIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['modify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['modify']['$post']>) {
      return parseResponse(client.patients[':id'].modify.$post(args, options))
    },
  })
}

export function usePostPatientsIdModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['modify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['modify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPatientsIdModifyMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdModuleQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['module']['$get']>,
) {
  return ['patients', '/patients/:id/module', args] as const
}

export function getPatientsIdModuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['module']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdModuleQueryKey>
  >({
    queryKey: getPatientsIdModuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].module.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['module']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdModuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdModuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['module']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['module']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdModuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdModuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatientsIdProtectedQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$get']>,
) {
  return ['patients', '/patients/:id/protected', args] as const
}

export function getPatientsIdProtectedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdProtectedQueryKey>
  >({
    queryKey: getPatientsIdProtectedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].protected.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdProtected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdProtectedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdProtectedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdProtected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdProtectedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdProtectedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPatientsIdProtectedMutationKey() {
  return ['patients', '/patients/:id/protected', 'PUT'] as const
}

export function getPutPatientsIdProtectedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['protected']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPatientsIdProtectedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.patients)[':id']['protected']['$put']>) {
      return parseResponse(client.patients[':id'].protected.$put(args, options))
    },
  })
}

export function usePutPatientsIdProtected<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['protected']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['protected']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPatientsIdProtectedMutationOptions<TError, TOnMutateResult>(
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

export function getPostPatientsIdReconstructMutationKey() {
  return ['patients', '/patients/:id/reconstruct', 'POST'] as const
}

export function getPostPatientsIdReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientsIdReconstructMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']>,
    ) {
      return parseResponse(client.patients[':id'].reconstruct.$post(args, options))
    },
  })
}

export function usePostPatientsIdReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['reconstruct']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPatientsIdReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getPatientsIdSeriesQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['series']['$get']>,
) {
  return ['patients', '/patients/:id/series', args] as const
}

export function getPatientsIdSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdSeriesQueryKey>
  >({
    queryKey: getPatientsIdSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['series']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['series']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatientsIdSharedTagsQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>,
) {
  return ['patients', '/patients/:id/shared-tags', args] as const
}

export function getPatientsIdSharedTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdSharedTagsQueryKey>
  >({
    queryKey: getPatientsIdSharedTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id']['shared-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdSharedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdSharedTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['shared-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdSharedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdSharedTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatientsIdStatisticsQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>,
) {
  return ['patients', '/patients/:id/statistics', args] as const
}

export function getPatientsIdStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdStatisticsQueryKey>
  >({
    queryKey: getPatientsIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatientsIdStudiesQueryKey(
  args: InferRequestType<(typeof client.patients)[':id']['studies']['$get']>,
) {
  return ['patients', '/patients/:id/studies', args] as const
}

export function getPatientsIdStudiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['studies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientsIdStudiesQueryKey>
  >({
    queryKey: getPatientsIdStudiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patients[':id'].studies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePatientsIdStudies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['studies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdStudiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientsIdStudiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientsIdStudies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patients)[':id']['studies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patients)[':id']['studies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientsIdStudiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientsIdStudiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeersQueryKey(args: InferRequestType<typeof client.peers.$get>) {
  return ['peers', '/peers', args] as const
}

export function getPeersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.peers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeersQueryKey>
  >({
    queryKey: getPeersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.peers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.peers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.peers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeersIdQueryKey(args: InferRequestType<(typeof client.peers)[':id']['$get']>) {
  return ['peers', '/peers/:id', args] as const
}

export function getPeersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.peers)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeersIdQueryKey>
  >({
    queryKey: getPeersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.peers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.peers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.peers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPeersIdMutationKey() {
  return ['peers', '/peers/:id', 'PUT'] as const
}

export function getPutPeersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.peers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPeersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.peers)[':id']['$put']>) {
      return parseResponse(client.peers[':id'].$put(args, options))
    },
  })
}

export function usePutPeersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.peers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPeersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePeersIdMutationKey() {
  return ['peers', '/peers/:id', 'DELETE'] as const
}

export function getDeletePeersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.peers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePeersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.peers)[':id']['$delete']>) {
      return parseResponse(client.peers[':id'].$delete(args, options))
    },
  })
}

export function useDeletePeersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.peers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePeersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPeersIdConfigurationQueryKey(
  args: InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>,
) {
  return ['peers', '/peers/:id/configuration', args] as const
}

export function getPeersIdConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeersIdConfigurationQueryKey>
  >({
    queryKey: getPeersIdConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.peers[':id'].configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePeersIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeersIdConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeersIdConfigurationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeersIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.peers)[':id']['configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeersIdConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeersIdConfigurationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPeersIdStoreMutationKey() {
  return ['peers', '/peers/:id/store', 'POST'] as const
}

export function getPostPeersIdStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['store']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.peers)[':id']['store']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPeersIdStoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.peers)[':id']['store']['$post']>) {
      return parseResponse(client.peers[':id'].store.$post(args, options))
    },
  })
}

export function usePostPeersIdStore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.peers)[':id']['store']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.peers)[':id']['store']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPeersIdStoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostPeersIdStoreStraightMutationKey() {
  return ['peers', '/peers/:id/store-straight', 'POST'] as const
}

export function getPostPeersIdStoreStraightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.peers)[':id']['store-straight']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPeersIdStoreStraightMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']>,
    ) {
      return parseResponse(client.peers[':id']['store-straight'].$post(args, options))
    },
  })
}

export function usePostPeersIdStoreStraight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.peers)[':id']['store-straight']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPeersIdStoreStraightMutationOptions<TError, TOnMutateResult>(
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

export function getPeersIdSystemQueryKey(
  args: InferRequestType<(typeof client.peers)[':id']['system']['$get']>,
) {
  return ['peers', '/peers/:id/system', args] as const
}

export function getPeersIdSystemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.peers)[':id']['system']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeersIdSystemQueryKey>
  >({
    queryKey: getPeersIdSystemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.peers[':id'].system.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeersIdSystem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.peers)[':id']['system']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeersIdSystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeersIdSystemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeersIdSystem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.peers)[':id']['system']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.peers)[':id']['system']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeersIdSystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeersIdSystemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPluginsQueryKey() {
  return ['plugins', '/plugins'] as const
}

export function getPluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >({
    queryKey: getPluginsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPluginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPluginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPluginsExplorerJsQueryKey() {
  return ['plugins', '/plugins/explorer.js'] as const
}

export function getPluginsExplorerJsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsExplorerJsQueryKey>
  >({
    queryKey: getPluginsExplorerJsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins['explorer.js'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePluginsExplorerJs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsExplorerJsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPluginsExplorerJsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePluginsExplorerJs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.plugins)['explorer.js']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsExplorerJsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPluginsExplorerJsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPluginsIdQueryKey(
  args: InferRequestType<(typeof client.plugins)[':id']['$get']>,
) {
  return ['plugins', '/plugins/:id', args] as const
}

export function getPluginsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.plugins)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsIdQueryKey>
  >({
    queryKey: getPluginsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePluginsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPluginsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePluginsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPluginsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueriesQueryKey() {
  return ['queries', '/queries'] as const
}

export function getQueriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueriesQueryKey>
  >({
    queryKey: getQueriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.queries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQueries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueriesIdQueryKey(
  args: InferRequestType<(typeof client.queries)[':id']['$get']>,
) {
  return ['queries', '/queries/:id', args] as const
}

export function getQueriesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.queries)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdQueryKey>
  >({
    queryKey: getQueriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQueriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteQueriesIdMutationKey() {
  return ['queries', '/queries/:id', 'DELETE'] as const
}

export function getDeleteQueriesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.queries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queries)[':id']['$delete']>) {
      return parseResponse(client.queries[':id'].$delete(args, options))
    },
  })
}

export function useDeleteQueriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.queries)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQueriesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueriesIdAnswersQueryKey(
  args: InferRequestType<(typeof client.queries)[':id']['answers']['$get']>,
) {
  return ['queries', '/queries/:id/answers', args] as const
}

export function getQueriesIdAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdAnswersQueryKey>
  >({
    queryKey: getQueriesIdAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries[':id'].answers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueriesIdAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdAnswersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueriesIdAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueriesIdAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['answers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdAnswersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueriesIdAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueriesIdAnswersIndexQueryKey(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>,
) {
  return ['queries', '/queries/:id/answers/:index', args] as const
}

export function getQueriesIdAnswersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdAnswersIndexQueryKey>
  >({
    queryKey: getQueriesIdAnswersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries[':id'].answers[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueriesIdAnswersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdAnswersIndexQueryKey>
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
      ...getQueriesIdAnswersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueriesIdAnswersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdAnswersIndexQueryKey>
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
      ...getQueriesIdAnswersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQueriesIdAnswersIndexContentQueryKey(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>,
) {
  return ['queries', '/queries/:id/answers/:index/content', args] as const
}

export function getQueriesIdAnswersIndexContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdAnswersIndexContentQueryKey>
  >({
    queryKey: getQueriesIdAnswersIndexContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries[':id'].answers[':index'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueriesIdAnswersIndexContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdAnswersIndexContentQueryKey>
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
      ...getQueriesIdAnswersIndexContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueriesIdAnswersIndexContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdAnswersIndexContentQueryKey>
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
      ...getQueriesIdAnswersIndexContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostQueriesIdAnswersIndexQueryInstancesMutationKey() {
  return ['queries', '/queries/:id/answers/:index/query-instances', 'POST'] as const
}

export function getPostQueriesIdAnswersIndexQueryInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdAnswersIndexQueryInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
      >,
    ) {
      return parseResponse(
        client.queries[':id'].answers[':index']['query-instances'].$post(args, options),
      )
    },
  })
}

export function usePostQueriesIdAnswersIndexQueryInstances<
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
                  (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
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
  const mutationDefaults = getPostQueriesIdAnswersIndexQueryInstancesMutationOptions<
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

export function getPostQueriesIdAnswersIndexQuerySeriesMutationKey() {
  return ['queries', '/queries/:id/answers/:index/query-series', 'POST'] as const
}

export function getPostQueriesIdAnswersIndexQuerySeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['query-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdAnswersIndexQuerySeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queries)[':id']['answers'][':index']['query-series']['$post']
      >,
    ) {
      return parseResponse(
        client.queries[':id'].answers[':index']['query-series'].$post(args, options),
      )
    },
  })
}

export function usePostQueriesIdAnswersIndexQuerySeries<
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
                  (typeof client.queries)[':id']['answers'][':index']['query-series']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queries)[':id']['answers'][':index']['query-series']['$post']
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
  const mutationDefaults = getPostQueriesIdAnswersIndexQuerySeriesMutationOptions<
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

export function getPostQueriesIdAnswersIndexQueryStudiesMutationKey() {
  return ['queries', '/queries/:id/answers/:index/query-studies', 'POST'] as const
}

export function getPostQueriesIdAnswersIndexQueryStudiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdAnswersIndexQueryStudiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
      >,
    ) {
      return parseResponse(
        client.queries[':id'].answers[':index']['query-studies'].$post(args, options),
      )
    },
  })
}

export function usePostQueriesIdAnswersIndexQueryStudies<
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
                  (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
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
  const mutationDefaults = getPostQueriesIdAnswersIndexQueryStudiesMutationOptions<
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

export function getPostQueriesIdAnswersIndexRetrieveMutationKey() {
  return ['queries', '/queries/:id/answers/:index/retrieve', 'POST'] as const
}

export function getPostQueriesIdAnswersIndexRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdAnswersIndexRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']
      >,
    ) {
      return parseResponse(client.queries[':id'].answers[':index'].retrieve.$post(args, options))
    },
  })
}

export function usePostQueriesIdAnswersIndexRetrieve<
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
                ReturnType<(typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueriesIdAnswersIndexRetrieveMutationOptions<
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

export function getQueriesIdLevelQueryKey(
  args: InferRequestType<(typeof client.queries)[':id']['level']['$get']>,
) {
  return ['queries', '/queries/:id/level', args] as const
}

export function getQueriesIdLevelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['level']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdLevelQueryKey>
  >({
    queryKey: getQueriesIdLevelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries[':id'].level.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQueriesIdLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['level']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueriesIdLevelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueriesIdLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['level']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['level']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueriesIdLevelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueriesIdModalityQueryKey(
  args: InferRequestType<(typeof client.queries)[':id']['modality']['$get']>,
) {
  return ['queries', '/queries/:id/modality', args] as const
}

export function getQueriesIdModalityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['modality']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdModalityQueryKey>
  >({
    queryKey: getQueriesIdModalityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries[':id'].modality.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueriesIdModality<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['modality']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdModalityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueriesIdModalityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueriesIdModality<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['modality']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['modality']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdModalityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueriesIdModalityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueriesIdQueryQueryKey(
  args: InferRequestType<(typeof client.queries)[':id']['query']['$get']>,
) {
  return ['queries', '/queries/:id/query', args] as const
}

export function getQueriesIdQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesIdQueryQueryKey>
  >({
    queryKey: getQueriesIdQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries[':id'].query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQueriesIdQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['query']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueriesIdQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueriesIdQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':id']['query']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['query']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueriesIdQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueriesIdQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQueriesIdRetrieveMutationKey() {
  return ['queries', '/queries/:id/retrieve', 'POST'] as const
}

export function getPostQueriesIdRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queries)[':id']['retrieve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesIdRetrieveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']>) {
      return parseResponse(client.queries[':id'].retrieve.$post(args, options))
    },
  })
}

export function usePostQueriesIdRetrieve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queries)[':id']['retrieve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueriesIdRetrieveMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesQueryKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function getSeriesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >({
    queryKey: getSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdQueryKey(args: InferRequestType<(typeof client.series)[':id']['$get']>) {
  return ['series', '/series/:id', args] as const
}

export function getSeriesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.series)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdQueryKey>
  >({
    queryKey: getSeriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSeriesIdMutationKey() {
  return ['series', '/series/:id', 'DELETE'] as const
}

export function getDeleteSeriesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSeriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['$delete']>) {
      return parseResponse(client.series[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSeriesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSeriesIdAnonymizeMutationKey() {
  return ['series', '/series/:id/anonymize', 'POST'] as const
}

export function getPostSeriesIdAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdAnonymizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['anonymize']['$post']>) {
      return parseResponse(client.series[':id'].anonymize.$post(args, options))
    },
  })
}

export function usePostSeriesIdAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['anonymize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['anonymize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSeriesIdAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdArchiveQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$get']>,
) {
  return ['series', '/series/:id/archive', args] as const
}

export function getSeriesIdArchiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdArchiveQueryKey>
  >({
    queryKey: getSeriesIdArchiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].archive.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdArchiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdArchiveQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['archive']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdArchiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdArchiveQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSeriesIdArchiveMutationKey() {
  return ['series', '/series/:id/archive', 'POST'] as const
}

export function getPostSeriesIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['archive']['$post']>) {
      return parseResponse(client.series[':id'].archive.$post(args, options))
    },
  })
}

export function usePostSeriesIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSeriesIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments']['$get']>,
) {
  return ['series', '/series/:id/attachments', args] as const
}

export function getSeriesIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsQueryKey>
  >({
    queryKey: getSeriesIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name', keyArgs] as const
}

export function getSeriesIdAttachmentsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameQueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameQueryKey>
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
      ...getSeriesIdAttachmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameQueryKey>
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
      ...getSeriesIdAttachmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSeriesIdAttachmentsNameMutationKey() {
  return ['series', '/series/:id/attachments/:name', 'PUT'] as const
}

export function getPutSeriesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSeriesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']>,
    ) {
      return parseResponse(client.series[':id'].attachments[':name'].$put(args, options))
    },
  })
}

export function usePutSeriesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSeriesIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSeriesIdAttachmentsNameMutationKey() {
  return ['series', '/series/:id/attachments/:name', 'DELETE'] as const
}

export function getDeleteSeriesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSeriesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>,
    ) {
      return parseResponse(client.series[':id'].attachments[':name'].$delete(args, options))
    },
  })
}

export function useDeleteSeriesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSeriesIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostSeriesIdAttachmentsNameCompressMutationKey() {
  return ['series', '/series/:id/attachments/:name/compress', 'POST'] as const
}

export function getPostSeriesIdAttachmentsNameCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['compress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdAttachmentsNameCompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.series)[':id']['attachments'][':name']['compress']['$post']
      >,
    ) {
      return parseResponse(client.series[':id'].attachments[':name'].compress.$post(args, options))
    },
  })
}

export function usePostSeriesIdAttachmentsNameCompress<
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
                  (typeof client.series)[':id']['attachments'][':name']['compress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.series)[':id']['attachments'][':name']['compress']['$post']
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
  const mutationDefaults = getPostSeriesIdAttachmentsNameCompressMutationOptions<
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

export function getSeriesIdAttachmentsNameCompressedDataQueryKey(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function getSeriesIdAttachmentsNameCompressedDataQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameCompressedDataQueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameCompressedDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name']['compressed-data'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsNameCompressedData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameCompressedDataQueryKey>
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
      ...getSeriesIdAttachmentsNameCompressedDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsNameCompressedData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameCompressedDataQueryKey>
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
      ...getSeriesIdAttachmentsNameCompressedDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameCompressedMd5QueryKey(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function getSeriesIdAttachmentsNameCompressedMd5QueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameCompressedMd5QueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameCompressedMd5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name']['compressed-md5'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameCompressedMd5QueryKey>
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
      ...getSeriesIdAttachmentsNameCompressedMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameCompressedMd5QueryKey>
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
      ...getSeriesIdAttachmentsNameCompressedMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameCompressedSizeQueryKey(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function getSeriesIdAttachmentsNameCompressedSizeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameCompressedSizeQueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameCompressedSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name']['compressed-size'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsNameCompressedSize<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameCompressedSizeQueryKey>
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
      ...getSeriesIdAttachmentsNameCompressedSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsNameCompressedSize<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameCompressedSizeQueryKey>
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
      ...getSeriesIdAttachmentsNameCompressedSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameDataQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/data', keyArgs] as const
}

export function getSeriesIdAttachmentsNameDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameDataQueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameDataQueryKey>
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
      ...getSeriesIdAttachmentsNameDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameDataQueryKey>
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
      ...getSeriesIdAttachmentsNameDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameInfoQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/info', keyArgs] as const
}

export function getSeriesIdAttachmentsNameInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameInfoQueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name'].info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameInfoQueryKey>
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
      ...getSeriesIdAttachmentsNameInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameInfoQueryKey>
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
      ...getSeriesIdAttachmentsNameInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameIsCompressedQueryKey(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function getSeriesIdAttachmentsNameIsCompressedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameIsCompressedQueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameIsCompressedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name']['is-compressed'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsNameIsCompressed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameIsCompressedQueryKey>
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
      ...getSeriesIdAttachmentsNameIsCompressedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsNameIsCompressed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameIsCompressedQueryKey>
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
      ...getSeriesIdAttachmentsNameIsCompressedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameMd5QueryKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/md5', keyArgs] as const
}

export function getSeriesIdAttachmentsNameMd5QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameMd5QueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameMd5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name'].md5.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameMd5QueryKey>
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
      ...getSeriesIdAttachmentsNameMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameMd5QueryKey>
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
      ...getSeriesIdAttachmentsNameMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdAttachmentsNameSizeQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/attachments/:name/size', keyArgs] as const
}

export function getSeriesIdAttachmentsNameSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdAttachmentsNameSizeQueryKey>
  >({
    queryKey: getSeriesIdAttachmentsNameSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].attachments[':name'].size.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameSizeQueryKey>
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
      ...getSeriesIdAttachmentsNameSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdAttachmentsNameSizeQueryKey>
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
      ...getSeriesIdAttachmentsNameSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSeriesIdAttachmentsNameUncompressMutationKey() {
  return ['series', '/series/:id/attachments/:name/uncompress', 'POST'] as const
}

export function getPostSeriesIdAttachmentsNameUncompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdAttachmentsNameUncompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']
      >,
    ) {
      return parseResponse(
        client.series[':id'].attachments[':name'].uncompress.$post(args, options),
      )
    },
  })
}

export function usePostSeriesIdAttachmentsNameUncompress<
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
                  (typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']
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
  const mutationDefaults = getPostSeriesIdAttachmentsNameUncompressMutationOptions<
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

export function getPostSeriesIdAttachmentsNameVerifyMd5MutationKey() {
  return ['series', '/series/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function getPostSeriesIdAttachmentsNameVerifyMd5MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdAttachmentsNameVerifyMd5MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']
      >,
    ) {
      return parseResponse(
        client.series[':id'].attachments[':name']['verify-md5'].$post(args, options),
      )
    },
  })
}

export function usePostSeriesIdAttachmentsNameVerifyMd5<
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
                  (typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']
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
  const mutationDefaults = getPostSeriesIdAttachmentsNameVerifyMd5MutationOptions<
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

export function getSeriesIdInstancesQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['instances']['$get']>,
) {
  return ['series', '/series/:id/instances', args] as const
}

export function getSeriesIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdInstancesQueryKey>
  >({
    queryKey: getSeriesIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdInstancesTagsQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>,
) {
  return ['series', '/series/:id/instances-tags', args] as const
}

export function getSeriesIdInstancesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdInstancesTagsQueryKey>
  >({
    queryKey: getSeriesIdInstancesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id']['instances-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdInstancesTagsQueryKey>
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
      ...getSeriesIdInstancesTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['instances-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdInstancesTagsQueryKey>
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
      ...getSeriesIdInstancesTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdMediaQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['media']['$get']>,
) {
  return ['series', '/series/:id/media', args] as const
}

export function getSeriesIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdMediaQueryKey>
  >({
    queryKey: getSeriesIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].media.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['media']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['media']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSeriesIdMediaMutationKey() {
  return ['series', '/series/:id/media', 'POST'] as const
}

export function getPostSeriesIdMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['media']['$post']>) {
      return parseResponse(client.series[':id'].media.$post(args, options))
    },
  })
}

export function usePostSeriesIdMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['media']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['media']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSeriesIdMediaMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdMetadataQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['metadata']['$get']>,
) {
  return ['series', '/series/:id/metadata', args] as const
}

export function getSeriesIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdMetadataQueryKey>
  >({
    queryKey: getSeriesIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdMetadataNameQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['series', '/series/:id/metadata/:name', keyArgs] as const
}

export function getSeriesIdMetadataNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdMetadataNameQueryKey>
  >({
    queryKey: getSeriesIdMetadataNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].metadata[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdMetadataNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdMetadataNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdMetadataNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdMetadataNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSeriesIdMetadataNameMutationKey() {
  return ['series', '/series/:id/metadata/:name', 'PUT'] as const
}

export function getPutSeriesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSeriesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']>,
    ) {
      return parseResponse(client.series[':id'].metadata[':name'].$put(args, options))
    },
  })
}

export function usePutSeriesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSeriesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSeriesIdMetadataNameMutationKey() {
  return ['series', '/series/:id/metadata/:name', 'DELETE'] as const
}

export function getDeleteSeriesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSeriesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']>,
    ) {
      return parseResponse(client.series[':id'].metadata[':name'].$delete(args, options))
    },
  })
}

export function useDeleteSeriesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['metadata'][':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSeriesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostSeriesIdModifyMutationKey() {
  return ['series', '/series/:id/modify', 'POST'] as const
}

export function getPostSeriesIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['modify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.series)[':id']['modify']['$post']>) {
      return parseResponse(client.series[':id'].modify.$post(args, options))
    },
  })
}

export function usePostSeriesIdModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['modify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['modify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSeriesIdModifyMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdModuleQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['module']['$get']>,
) {
  return ['series', '/series/:id/module', args] as const
}

export function getSeriesIdModuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['module']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdModuleQueryKey>
  >({
    queryKey: getSeriesIdModuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].module.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['module']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdModuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdModuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['module']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['module']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdModuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdModuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdNumpyQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['numpy']['$get']>,
) {
  return ['series', '/series/:id/numpy', args] as const
}

export function getSeriesIdNumpyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['numpy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdNumpyQueryKey>
  >({
    queryKey: getSeriesIdNumpyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].numpy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesIdNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['numpy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdNumpyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdNumpyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdNumpy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['numpy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['numpy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdNumpyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdNumpyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdOrderedSlicesQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>,
) {
  return ['series', '/series/:id/ordered-slices', args] as const
}

export function getSeriesIdOrderedSlicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdOrderedSlicesQueryKey>
  >({
    queryKey: getSeriesIdOrderedSlicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id']['ordered-slices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdOrderedSlices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdOrderedSlicesQueryKey>
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
      ...getSeriesIdOrderedSlicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSeriesIdOrderedSlices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['ordered-slices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdOrderedSlicesQueryKey>
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
      ...getSeriesIdOrderedSlicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSeriesIdPatientQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['patient']['$get']>,
) {
  return ['series', '/series/:id/patient', args] as const
}

export function getSeriesIdPatientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['patient']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdPatientQueryKey>
  >({
    queryKey: getSeriesIdPatientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].patient.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['patient']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdPatientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdPatientQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['patient']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['patient']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdPatientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdPatientQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSeriesIdReconstructMutationKey() {
  return ['series', '/series/:id/reconstruct', 'POST'] as const
}

export function getPostSeriesIdReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesIdReconstructMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']>,
    ) {
      return parseResponse(client.series[':id'].reconstruct.$post(args, options))
    },
  })
}

export function usePostSeriesIdReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['reconstruct']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSeriesIdReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesIdSharedTagsQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>,
) {
  return ['series', '/series/:id/shared-tags', args] as const
}

export function getSeriesIdSharedTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdSharedTagsQueryKey>
  >({
    queryKey: getSeriesIdSharedTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id']['shared-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdSharedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdSharedTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['shared-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdSharedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdSharedTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdStatisticsQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['statistics']['$get']>,
) {
  return ['series', '/series/:id/statistics', args] as const
}

export function getSeriesIdStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdStatisticsQueryKey>
  >({
    queryKey: getSeriesIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSeriesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesIdStudyQueryKey(
  args: InferRequestType<(typeof client.series)[':id']['study']['$get']>,
) {
  return ['series', '/series/:id/study', args] as const
}

export function getSeriesIdStudyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['study']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesIdStudyQueryKey>
  >({
    queryKey: getSeriesIdStudyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':id'].study.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesIdStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['study']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdStudyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesIdStudyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesIdStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':id']['study']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.series)[':id']['study']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesIdStudyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesIdStudyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStatisticsQueryKey() {
  return ['statistics', '/statistics'] as const
}

export function getStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatisticsQueryKey>
  >({
    queryKey: getStatisticsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatisticsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatisticsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStorageCommitmentIdQueryKey(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>,
) {
  return ['storage-commitment', '/storage-commitment/:id', args] as const
}

export function getStorageCommitmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorageCommitmentIdQueryKey>
  >({
    queryKey: getStorageCommitmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['storage-commitment'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStorageCommitmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStorageCommitmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStorageCommitmentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStorageCommitmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStorageCommitmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStorageCommitmentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStorageCommitmentIdRemoveMutationKey() {
  return ['storage-commitment', '/storage-commitment/:id/remove', 'POST'] as const
}

export function getPostStorageCommitmentIdRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStorageCommitmentIdRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>,
    ) {
      return parseResponse(client['storage-commitment'][':id'].remove.$post(args, options))
    },
  })
}

export function usePostStorageCommitmentIdRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['storage-commitment'][':id']['remove']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStorageCommitmentIdRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesQueryKey(args: InferRequestType<typeof client.studies.$get>) {
  return ['studies', '/studies', args] as const
}

export function getStudiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.studies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStudiesQueryKey>
  >({
    queryKey: getStudiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStudies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.studies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStudiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.studies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.studies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStudiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStudiesIdQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['$get']>,
) {
  return ['studies', '/studies/:id', args] as const
}

export function getStudiesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.studies)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdQueryKey>
  >({
    queryKey: getStudiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStudiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteStudiesIdMutationKey() {
  return ['studies', '/studies/:id', 'DELETE'] as const
}

export function getDeleteStudiesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStudiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['$delete']>) {
      return parseResponse(client.studies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteStudiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStudiesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStudiesIdAnonymizeMutationKey() {
  return ['studies', '/studies/:id/anonymize', 'POST'] as const
}

export function getPostStudiesIdAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['anonymize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdAnonymizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']>) {
      return parseResponse(client.studies[':id'].anonymize.$post(args, options))
    },
  })
}

export function usePostStudiesIdAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['anonymize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStudiesIdAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdArchiveQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$get']>,
) {
  return ['studies', '/studies/:id/archive', args] as const
}

export function getStudiesIdArchiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdArchiveQueryKey>
  >({
    queryKey: getStudiesIdArchiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].archive.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdArchiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdArchiveQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdArchiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdArchiveQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStudiesIdArchiveMutationKey() {
  return ['studies', '/studies/:id/archive', 'POST'] as const
}

export function getPostStudiesIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['archive']['$post']>) {
      return parseResponse(client.studies[':id'].archive.$post(args, options))
    },
  })
}

export function usePostStudiesIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStudiesIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>,
) {
  return ['studies', '/studies/:id/attachments', args] as const
}

export function getStudiesIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsQueryKey>
  >({
    queryKey: getStudiesIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name', keyArgs] as const
}

export function getStudiesIdAttachmentsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameQueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameQueryKey>
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
      ...getStudiesIdAttachmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameQueryKey>
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
      ...getStudiesIdAttachmentsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutStudiesIdAttachmentsNameMutationKey() {
  return ['studies', '/studies/:id/attachments/:name', 'PUT'] as const
}

export function getPutStudiesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStudiesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>,
    ) {
      return parseResponse(client.studies[':id'].attachments[':name'].$put(args, options))
    },
  })
}

export function usePutStudiesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutStudiesIdAttachmentsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStudiesIdAttachmentsNameMutationKey() {
  return ['studies', '/studies/:id/attachments/:name', 'DELETE'] as const
}

export function getDeleteStudiesIdAttachmentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStudiesIdAttachmentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>,
    ) {
      return parseResponse(client.studies[':id'].attachments[':name'].$delete(args, options))
    },
  })
}

export function useDeleteStudiesIdAttachmentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStudiesIdAttachmentsNameMutationOptions<
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

export function getPostStudiesIdAttachmentsNameCompressMutationKey() {
  return ['studies', '/studies/:id/attachments/:name/compress', 'POST'] as const
}

export function getPostStudiesIdAttachmentsNameCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['compress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdAttachmentsNameCompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.studies)[':id']['attachments'][':name']['compress']['$post']
      >,
    ) {
      return parseResponse(client.studies[':id'].attachments[':name'].compress.$post(args, options))
    },
  })
}

export function usePostStudiesIdAttachmentsNameCompress<
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
                  (typeof client.studies)[':id']['attachments'][':name']['compress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.studies)[':id']['attachments'][':name']['compress']['$post']
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
  const mutationDefaults = getPostStudiesIdAttachmentsNameCompressMutationOptions<
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

export function getStudiesIdAttachmentsNameCompressedDataQueryKey(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/compressed-data', keyArgs] as const
}

export function getStudiesIdAttachmentsNameCompressedDataQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameCompressedDataQueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameCompressedDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['compressed-data'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsNameCompressedData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameCompressedDataQueryKey>
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
      ...getStudiesIdAttachmentsNameCompressedDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsNameCompressedData<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameCompressedDataQueryKey>
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
      ...getStudiesIdAttachmentsNameCompressedDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameCompressedMd5QueryKey(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/compressed-md5', keyArgs] as const
}

export function getStudiesIdAttachmentsNameCompressedMd5QueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameCompressedMd5QueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameCompressedMd5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['compressed-md5'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameCompressedMd5QueryKey>
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
      ...getStudiesIdAttachmentsNameCompressedMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsNameCompressedMd5<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameCompressedMd5QueryKey>
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
      ...getStudiesIdAttachmentsNameCompressedMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameCompressedSizeQueryKey(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/compressed-size', keyArgs] as const
}

export function getStudiesIdAttachmentsNameCompressedSizeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameCompressedSizeQueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameCompressedSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['compressed-size'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsNameCompressedSize<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameCompressedSizeQueryKey>
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
      ...getStudiesIdAttachmentsNameCompressedSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsNameCompressedSize<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameCompressedSizeQueryKey>
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
      ...getStudiesIdAttachmentsNameCompressedSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameDataQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/data', keyArgs] as const
}

export function getStudiesIdAttachmentsNameDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameDataQueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameDataQueryKey>
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
      ...getStudiesIdAttachmentsNameDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsNameData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameDataQueryKey>
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
      ...getStudiesIdAttachmentsNameDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameInfoQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/info', keyArgs] as const
}

export function getStudiesIdAttachmentsNameInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameInfoQueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameInfoQueryKey>
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
      ...getStudiesIdAttachmentsNameInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsNameInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameInfoQueryKey>
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
      ...getStudiesIdAttachmentsNameInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameIsCompressedQueryKey(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/is-compressed', keyArgs] as const
}

export function getStudiesIdAttachmentsNameIsCompressedQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameIsCompressedQueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameIsCompressedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['is-compressed'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsNameIsCompressed<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameIsCompressedQueryKey>
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
      ...getStudiesIdAttachmentsNameIsCompressedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsNameIsCompressed<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameIsCompressedQueryKey>
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
      ...getStudiesIdAttachmentsNameIsCompressedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameMd5QueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/md5', keyArgs] as const
}

export function getStudiesIdAttachmentsNameMd5QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameMd5QueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameMd5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].md5.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameMd5QueryKey>
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
      ...getStudiesIdAttachmentsNameMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsNameMd5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameMd5QueryKey>
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
      ...getStudiesIdAttachmentsNameMd5QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdAttachmentsNameSizeQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/attachments/:name/size', keyArgs] as const
}

export function getStudiesIdAttachmentsNameSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdAttachmentsNameSizeQueryKey>
  >({
    queryKey: getStudiesIdAttachmentsNameSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].size.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameSizeQueryKey>
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
      ...getStudiesIdAttachmentsNameSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdAttachmentsNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdAttachmentsNameSizeQueryKey>
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
      ...getStudiesIdAttachmentsNameSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostStudiesIdAttachmentsNameUncompressMutationKey() {
  return ['studies', '/studies/:id/attachments/:name/uncompress', 'POST'] as const
}

export function getPostStudiesIdAttachmentsNameUncompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdAttachmentsNameUncompressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
      >,
    ) {
      return parseResponse(
        client.studies[':id'].attachments[':name'].uncompress.$post(args, options),
      )
    },
  })
}

export function usePostStudiesIdAttachmentsNameUncompress<
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
                  (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
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
  const mutationDefaults = getPostStudiesIdAttachmentsNameUncompressMutationOptions<
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

export function getPostStudiesIdAttachmentsNameVerifyMd5MutationKey() {
  return ['studies', '/studies/:id/attachments/:name/verify-md5', 'POST'] as const
}

export function getPostStudiesIdAttachmentsNameVerifyMd5MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdAttachmentsNameVerifyMd5MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
      >,
    ) {
      return parseResponse(
        client.studies[':id'].attachments[':name']['verify-md5'].$post(args, options),
      )
    },
  })
}

export function usePostStudiesIdAttachmentsNameVerifyMd5<
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
                  (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
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
  const mutationDefaults = getPostStudiesIdAttachmentsNameVerifyMd5MutationOptions<
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

export function getStudiesIdInstancesQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['instances']['$get']>,
) {
  return ['studies', '/studies/:id/instances', args] as const
}

export function getStudiesIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdInstancesQueryKey>
  >({
    queryKey: getStudiesIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStudiesIdInstancesTagsQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>,
) {
  return ['studies', '/studies/:id/instances-tags', args] as const
}

export function getStudiesIdInstancesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdInstancesTagsQueryKey>
  >({
    queryKey: getStudiesIdInstancesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id']['instances-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdInstancesTagsQueryKey>
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
      ...getStudiesIdInstancesTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdInstancesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['instances-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdInstancesTagsQueryKey>
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
      ...getStudiesIdInstancesTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdMediaQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$get']>,
) {
  return ['studies', '/studies/:id/media', args] as const
}

export function getStudiesIdMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdMediaQueryKey>
  >({
    queryKey: getStudiesIdMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].media.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStudiesIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStudiesIdMediaMutationKey() {
  return ['studies', '/studies/:id/media', 'POST'] as const
}

export function getPostStudiesIdMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['media']['$post']>) {
      return parseResponse(client.studies[':id'].media.$post(args, options))
    },
  })
}

export function usePostStudiesIdMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['media']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['media']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStudiesIdMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPostStudiesIdMergeMutationKey() {
  return ['studies', '/studies/:id/merge', 'POST'] as const
}

export function getPostStudiesIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['merge']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdMergeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['merge']['$post']>) {
      return parseResponse(client.studies[':id'].merge.$post(args, options))
    },
  })
}

export function usePostStudiesIdMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['merge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['merge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStudiesIdMergeMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdMetadataQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>,
) {
  return ['studies', '/studies/:id/metadata', args] as const
}

export function getStudiesIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdMetadataQueryKey>
  >({
    queryKey: getStudiesIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStudiesIdMetadataNameQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['studies', '/studies/:id/metadata/:name', keyArgs] as const
}

export function getStudiesIdMetadataNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdMetadataNameQueryKey>
  >({
    queryKey: getStudiesIdMetadataNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].metadata[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdMetadataNameQueryKey>
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
      ...getStudiesIdMetadataNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdMetadataName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdMetadataNameQueryKey>
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
      ...getStudiesIdMetadataNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutStudiesIdMetadataNameMutationKey() {
  return ['studies', '/studies/:id/metadata/:name', 'PUT'] as const
}

export function getPutStudiesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStudiesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']>,
    ) {
      return parseResponse(client.studies[':id'].metadata[':name'].$put(args, options))
    },
  })
}

export function usePutStudiesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutStudiesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStudiesIdMetadataNameMutationKey() {
  return ['studies', '/studies/:id/metadata/:name', 'DELETE'] as const
}

export function getDeleteStudiesIdMetadataNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStudiesIdMetadataNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>,
    ) {
      return parseResponse(client.studies[':id'].metadata[':name'].$delete(args, options))
    },
  })
}

export function useDeleteStudiesIdMetadataName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStudiesIdMetadataNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostStudiesIdModifyMutationKey() {
  return ['studies', '/studies/:id/modify', 'POST'] as const
}

export function getPostStudiesIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['modify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['modify']['$post']>) {
      return parseResponse(client.studies[':id'].modify.$post(args, options))
    },
  })
}

export function usePostStudiesIdModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['modify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['modify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStudiesIdModifyMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdModuleQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['module']['$get']>,
) {
  return ['studies', '/studies/:id/module', args] as const
}

export function getStudiesIdModuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['module']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdModuleQueryKey>
  >({
    queryKey: getStudiesIdModuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].module.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStudiesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['module']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdModuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdModuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdModule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['module']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['module']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdModuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdModuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStudiesIdModulePatientQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>,
) {
  return ['studies', '/studies/:id/module-patient', args] as const
}

export function getStudiesIdModulePatientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdModulePatientQueryKey>
  >({
    queryKey: getStudiesIdModulePatientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id']['module-patient'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdModulePatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdModulePatientQueryKey>
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
      ...getStudiesIdModulePatientQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStudiesIdModulePatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['module-patient']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdModulePatientQueryKey>
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
      ...getStudiesIdModulePatientQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStudiesIdPatientQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['patient']['$get']>,
) {
  return ['studies', '/studies/:id/patient', args] as const
}

export function getStudiesIdPatientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['patient']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdPatientQueryKey>
  >({
    queryKey: getStudiesIdPatientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].patient.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['patient']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdPatientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdPatientQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdPatient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['patient']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['patient']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdPatientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdPatientQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStudiesIdReconstructMutationKey() {
  return ['studies', '/studies/:id/reconstruct', 'POST'] as const
}

export function getPostStudiesIdReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['reconstruct']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdReconstructMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']>,
    ) {
      return parseResponse(client.studies[':id'].reconstruct.$post(args, options))
    },
  })
}

export function usePostStudiesIdReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['reconstruct']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStudiesIdReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdSeriesQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['series']['$get']>,
) {
  return ['studies', '/studies/:id/series', args] as const
}

export function getStudiesIdSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdSeriesQueryKey>
  >({
    queryKey: getStudiesIdSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStudiesIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['series']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['series']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['series']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStudiesIdSharedTagsQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>,
) {
  return ['studies', '/studies/:id/shared-tags', args] as const
}

export function getStudiesIdSharedTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdSharedTagsQueryKey>
  >({
    queryKey: getStudiesIdSharedTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id']['shared-tags'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdSharedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdSharedTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdSharedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['shared-tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdSharedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdSharedTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStudiesIdSplitMutationKey() {
  return ['studies', '/studies/:id/split', 'POST'] as const
}

export function getPostStudiesIdSplitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studies)[':id']['split']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.studies)[':id']['split']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStudiesIdSplitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.studies)[':id']['split']['$post']>) {
      return parseResponse(client.studies[':id'].split.$post(args, options))
    },
  })
}

export function usePostStudiesIdSplit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['split']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.studies)[':id']['split']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStudiesIdSplitMutationOptions<TError, TOnMutateResult>(
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

export function getStudiesIdStatisticsQueryKey(
  args: InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>,
) {
  return ['studies', '/studies/:id/statistics', args] as const
}

export function getStudiesIdStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiesIdStatisticsQueryKey>
  >({
    queryKey: getStudiesIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studies[':id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStudiesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStudiesIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStudiesIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.studies)[':id']['statistics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudiesIdStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStudiesIdStatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSystemQueryKey() {
  return ['system', '/system'] as const
}

export function getSystemQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemQueryKey>
  >({
    queryKey: getSystemQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSystem<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSystemQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSystem<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSystemQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getToolsQueryKey() {
  return ['tools', '/tools'] as const
}

export function getToolsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getToolsQueryKey>
  >({
    queryKey: getToolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getToolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getToolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getToolsAcceptedTransferSyntaxesQueryKey() {
  return ['tools', '/tools/accepted-transfer-syntaxes'] as const
}

export function getToolsAcceptedTransferSyntaxesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsAcceptedTransferSyntaxesQueryKey>
  >({
    queryKey: getToolsAcceptedTransferSyntaxesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['accepted-transfer-syntaxes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsAcceptedTransferSyntaxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsAcceptedTransferSyntaxesQueryKey>
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
      ...getToolsAcceptedTransferSyntaxesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolsAcceptedTransferSyntaxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsAcceptedTransferSyntaxesQueryKey>
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
      ...getToolsAcceptedTransferSyntaxesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutToolsAcceptedTransferSyntaxesMutationKey() {
  return ['tools', '/tools/accepted-transfer-syntaxes', 'PUT'] as const
}

export function getPutToolsAcceptedTransferSyntaxesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsAcceptedTransferSyntaxesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>,
    ) {
      return parseResponse(client.tools['accepted-transfer-syntaxes'].$put(args, options))
    },
  })
}

export function usePutToolsAcceptedTransferSyntaxes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsAcceptedTransferSyntaxesMutationOptions<
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

export function getPostToolsBulkAnonymizeMutationKey() {
  return ['tools', '/tools/bulk-anonymize', 'POST'] as const
}

export function getPostToolsBulkAnonymizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-anonymize']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsBulkAnonymizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']>) {
      return parseResponse(client.tools['bulk-anonymize'].$post(args, options))
    },
  })
}

export function usePostToolsBulkAnonymize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['bulk-anonymize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsBulkAnonymizeMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsBulkContentMutationKey() {
  return ['tools', '/tools/bulk-content', 'POST'] as const
}

export function getPostToolsBulkContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-content']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['bulk-content']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsBulkContentMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['bulk-content']['$post']>) {
      return parseResponse(client.tools['bulk-content'].$post(args, options))
    },
  })
}

export function usePostToolsBulkContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['bulk-content']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['bulk-content']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsBulkContentMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsBulkDeleteMutationKey() {
  return ['tools', '/tools/bulk-delete', 'POST'] as const
}

export function getPostToolsBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['bulk-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsBulkDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['bulk-delete']['$post']>) {
      return parseResponse(client.tools['bulk-delete'].$post(args, options))
    },
  })
}

export function usePostToolsBulkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['bulk-delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsBulkDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsBulkModifyMutationKey() {
  return ['tools', '/tools/bulk-modify', 'POST'] as const
}

export function getPostToolsBulkModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-modify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['bulk-modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsBulkModifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['bulk-modify']['$post']>) {
      return parseResponse(client.tools['bulk-modify'].$post(args, options))
    },
  })
}

export function usePostToolsBulkModify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['bulk-modify']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['bulk-modify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsBulkModifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsCreateArchiveMutationKey() {
  return ['tools', '/tools/create-archive', 'POST'] as const
}

export function getPostToolsCreateArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['create-archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsCreateArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['create-archive']['$post']>) {
      return parseResponse(client.tools['create-archive'].$post(args, options))
    },
  })
}

export function usePostToolsCreateArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['create-archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['create-archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsCreateArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsCreateDicomMutationKey() {
  return ['tools', '/tools/create-dicom', 'POST'] as const
}

export function getPostToolsCreateDicomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-dicom']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['create-dicom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsCreateDicomMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['create-dicom']['$post']>) {
      return parseResponse(client.tools['create-dicom'].$post(args, options))
    },
  })
}

export function usePostToolsCreateDicom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['create-dicom']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['create-dicom']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsCreateDicomMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsCreateMediaMutationKey() {
  return ['tools', '/tools/create-media', 'POST'] as const
}

export function getPostToolsCreateMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['create-media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['create-media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsCreateMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['create-media']['$post']>) {
      return parseResponse(client.tools['create-media'].$post(args, options))
    },
  })
}

export function usePostToolsCreateMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['create-media']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['create-media']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsCreateMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsCreateMediaExtendedMutationKey() {
  return ['tools', '/tools/create-media-extended', 'POST'] as const
}

export function getPostToolsCreateMediaExtendedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['create-media-extended']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['create-media-extended']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsCreateMediaExtendedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tools)['create-media-extended']['$post']>,
    ) {
      return parseResponse(client.tools['create-media-extended'].$post(args, options))
    },
  })
}

export function usePostToolsCreateMediaExtended<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['create-media-extended']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['create-media-extended']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsCreateMediaExtendedMutationOptions<TError, TOnMutateResult>(
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

export function getToolsDefaultEncodingQueryKey() {
  return ['tools', '/tools/default-encoding'] as const
}

export function getToolsDefaultEncodingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsDefaultEncodingQueryKey>
  >({
    queryKey: getToolsDefaultEncodingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['default-encoding'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsDefaultEncoding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsDefaultEncodingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsDefaultEncodingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsDefaultEncoding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['default-encoding']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsDefaultEncodingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsDefaultEncodingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsDefaultEncodingMutationKey() {
  return ['tools', '/tools/default-encoding', 'PUT'] as const
}

export function getPutToolsDefaultEncodingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['default-encoding']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['default-encoding']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsDefaultEncodingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['default-encoding']['$put']>) {
      return parseResponse(client.tools['default-encoding'].$put(args, options))
    },
  })
}

export function usePutToolsDefaultEncoding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['default-encoding']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['default-encoding']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsDefaultEncodingMutationOptions<TError, TOnMutateResult>(
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

export function getToolsDicomConformanceQueryKey() {
  return ['tools', '/tools/dicom-conformance'] as const
}

export function getToolsDicomConformanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsDicomConformanceQueryKey>
  >({
    queryKey: getToolsDicomConformanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['dicom-conformance'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsDicomConformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsDicomConformanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsDicomConformanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsDicomConformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['dicom-conformance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsDicomConformanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsDicomConformanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostToolsDicomEchoMutationKey() {
  return ['tools', '/tools/dicom-echo', 'POST'] as const
}

export function getPostToolsDicomEchoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['dicom-echo']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['dicom-echo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsDicomEchoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['dicom-echo']['$post']>) {
      return parseResponse(client.tools['dicom-echo'].$post(args, options))
    },
  })
}

export function usePostToolsDicomEcho<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['dicom-echo']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['dicom-echo']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsDicomEchoMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsExecuteScriptMutationKey() {
  return ['tools', '/tools/execute-script', 'POST'] as const
}

export function getPostToolsExecuteScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['execute-script']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['execute-script']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsExecuteScriptMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['execute-script']['$post']>) {
      return parseResponse(client.tools['execute-script'].$post(args, options))
    },
  })
}

export function usePostToolsExecuteScript<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['execute-script']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['execute-script']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsExecuteScriptMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsFindMutationKey() {
  return ['tools', '/tools/find', 'POST'] as const
}

export function getPostToolsFindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.find.$post>>>>>,
    TError,
    InferRequestType<typeof client.tools.find.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsFindMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.find.$post>) {
      return parseResponse(client.tools.find.$post(args, options))
    },
  })
}

export function usePostToolsFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.find.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tools.find.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsFindMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolsGenerateUidQueryKey(
  args: InferRequestType<(typeof client.tools)['generate-uid']['$get']>,
) {
  return ['tools', '/tools/generate-uid', args] as const
}

export function getToolsGenerateUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tools)['generate-uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsGenerateUidQueryKey>
  >({
    queryKey: getToolsGenerateUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['generate-uid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useToolsGenerateUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tools)['generate-uid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsGenerateUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsGenerateUidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsGenerateUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tools)['generate-uid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['generate-uid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsGenerateUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsGenerateUidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostToolsInvalidateTagsMutationKey() {
  return ['tools', '/tools/invalidate-tags', 'POST'] as const
}

export function getPostToolsInvalidateTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['invalidate-tags']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostToolsInvalidateTagsMutationKey(),
    async mutationFn() {
      return parseResponse(client.tools['invalidate-tags'].$post(undefined, options))
    },
  })
}

export function usePostToolsInvalidateTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['invalidate-tags']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsInvalidateTagsMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelQueryKey() {
  return ['tools', '/tools/log-level'] as const
}

export function getToolsLogLevelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelQueryKey>
  >({
    queryKey: getToolsLogLevelQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['log-level'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsLogLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsLogLevelQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsLogLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsLogLevelQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsLogLevelMutationKey() {
  return ['tools', '/tools/log-level', 'PUT'] as const
}

export function getPutToolsLogLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level']['$put']>) {
      return parseResponse(client.tools['log-level'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['log-level']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsLogLevelMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelDicomQueryKey() {
  return ['tools', '/tools/log-level-dicom'] as const
}

export function getToolsLogLevelDicomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelDicomQueryKey>
  >({
    queryKey: getToolsLogLevelDicomQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['log-level-dicom'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsLogLevelDicom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelDicomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsLogLevelDicomQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsLogLevelDicom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelDicomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsLogLevelDicomQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsLogLevelDicomMutationKey() {
  return ['tools', '/tools/log-level-dicom', 'PUT'] as const
}

export function getPutToolsLogLevelDicomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-dicom']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelDicomMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-dicom']['$put']>) {
      return parseResponse(client.tools['log-level-dicom'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelDicom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-dicom']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['log-level-dicom']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsLogLevelDicomMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelGenericQueryKey() {
  return ['tools', '/tools/log-level-generic'] as const
}

export function getToolsLogLevelGenericQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelGenericQueryKey>
  >({
    queryKey: getToolsLogLevelGenericQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['log-level-generic'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsLogLevelGeneric<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelGenericQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsLogLevelGenericQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsLogLevelGeneric<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelGenericQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsLogLevelGenericQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsLogLevelGenericMutationKey() {
  return ['tools', '/tools/log-level-generic', 'PUT'] as const
}

export function getPutToolsLogLevelGenericMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-generic']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelGenericMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-generic']['$put']>) {
      return parseResponse(client.tools['log-level-generic'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelGeneric<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-generic']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['log-level-generic']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsLogLevelGenericMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelHttpQueryKey() {
  return ['tools', '/tools/log-level-http'] as const
}

export function getToolsLogLevelHttpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelHttpQueryKey>
  >({
    queryKey: getToolsLogLevelHttpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['log-level-http'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsLogLevelHttp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelHttpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsLogLevelHttpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsLogLevelHttp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-http']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelHttpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsLogLevelHttpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsLogLevelHttpMutationKey() {
  return ['tools', '/tools/log-level-http', 'PUT'] as const
}

export function getPutToolsLogLevelHttpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-http']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-http']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelHttpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-http']['$put']>) {
      return parseResponse(client.tools['log-level-http'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelHttp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-http']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['log-level-http']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsLogLevelHttpMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelJobsQueryKey() {
  return ['tools', '/tools/log-level-jobs'] as const
}

export function getToolsLogLevelJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelJobsQueryKey>
  >({
    queryKey: getToolsLogLevelJobsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['log-level-jobs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsLogLevelJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsLogLevelJobsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsLogLevelJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsLogLevelJobsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsLogLevelJobsMutationKey() {
  return ['tools', '/tools/log-level-jobs', 'PUT'] as const
}

export function getPutToolsLogLevelJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-jobs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-jobs']['$put']>) {
      return parseResponse(client.tools['log-level-jobs'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-jobs']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['log-level-jobs']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsLogLevelJobsMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelLuaQueryKey() {
  return ['tools', '/tools/log-level-lua'] as const
}

export function getToolsLogLevelLuaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelLuaQueryKey>
  >({
    queryKey: getToolsLogLevelLuaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['log-level-lua'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsLogLevelLua<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelLuaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsLogLevelLuaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsLogLevelLua<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelLuaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsLogLevelLuaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsLogLevelLuaMutationKey() {
  return ['tools', '/tools/log-level-lua', 'PUT'] as const
}

export function getPutToolsLogLevelLuaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-lua']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelLuaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-lua']['$put']>) {
      return parseResponse(client.tools['log-level-lua'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelLua<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-lua']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['log-level-lua']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsLogLevelLuaMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelPluginsQueryKey() {
  return ['tools', '/tools/log-level-plugins'] as const
}

export function getToolsLogLevelPluginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelPluginsQueryKey>
  >({
    queryKey: getToolsLogLevelPluginsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['log-level-plugins'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsLogLevelPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsLogLevelPluginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsLogLevelPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsLogLevelPluginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsLogLevelPluginsMutationKey() {
  return ['tools', '/tools/log-level-plugins', 'PUT'] as const
}

export function getPutToolsLogLevelPluginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-plugins']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelPluginsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-plugins']['$put']>) {
      return parseResponse(client.tools['log-level-plugins'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelPlugins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-plugins']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['log-level-plugins']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsLogLevelPluginsMutationOptions<TError, TOnMutateResult>(
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

export function getToolsLogLevelSqliteQueryKey() {
  return ['tools', '/tools/log-level-sqlite'] as const
}

export function getToolsLogLevelSqliteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsLogLevelSqliteQueryKey>
  >({
    queryKey: getToolsLogLevelSqliteQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['log-level-sqlite'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsLogLevelSqlite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelSqliteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsLogLevelSqliteQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsLogLevelSqlite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsLogLevelSqliteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsLogLevelSqliteQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsLogLevelSqliteMutationKey() {
  return ['tools', '/tools/log-level-sqlite', 'PUT'] as const
}

export function getPutToolsLogLevelSqliteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsLogLevelSqliteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']>) {
      return parseResponse(client.tools['log-level-sqlite'].$put(args, options))
    },
  })
}

export function usePutToolsLogLevelSqlite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['log-level-sqlite']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsLogLevelSqliteMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsLookupMutationKey() {
  return ['tools', '/tools/lookup', 'POST'] as const
}

export function getPostToolsLookupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.lookup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tools.lookup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsLookupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.lookup.$post>) {
      return parseResponse(client.tools.lookup.$post(args, options))
    },
  })
}

export function usePostToolsLookup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.lookup.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tools.lookup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsLookupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolsMetricsQueryKey() {
  return ['tools', '/tools/metrics'] as const
}

export function getToolsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getToolsMetricsQueryKey>
  >({
    queryKey: getToolsMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useToolsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getToolsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getToolsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutToolsMetricsMutationKey() {
  return ['tools', '/tools/metrics', 'PUT'] as const
}

export function getPutToolsMetricsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.tools.metrics.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsMetricsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.metrics.$put>) {
      return parseResponse(client.tools.metrics.$put(args, options))
    },
  })
}

export function usePutToolsMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.metrics.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.tools.metrics.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsMetricsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolsMetricsPrometheusQueryKey() {
  return ['tools', '/tools/metrics-prometheus'] as const
}

export function getToolsMetricsPrometheusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsMetricsPrometheusQueryKey>
  >({
    queryKey: getToolsMetricsPrometheusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['metrics-prometheus'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsMetricsPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsMetricsPrometheusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsMetricsPrometheusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsMetricsPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['metrics-prometheus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsMetricsPrometheusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsMetricsPrometheusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getToolsNowQueryKey() {
  return ['tools', '/tools/now'] as const
}

export function getToolsNowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getToolsNowQueryKey>
  >({
    queryKey: getToolsNowQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools.now.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useToolsNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getToolsNowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsNowQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsNow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.now.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getToolsNowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsNowQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getToolsNowLocalQueryKey() {
  return ['tools', '/tools/now-local'] as const
}

export function getToolsNowLocalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsNowLocalQueryKey>
  >({
    queryKey: getToolsNowLocalQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['now-local'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsNowLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsNowLocalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getToolsNowLocalQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseToolsNowLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)['now-local']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsNowLocalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getToolsNowLocalQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostToolsReconstructMutationKey() {
  return ['tools', '/tools/reconstruct', 'POST'] as const
}

export function getPostToolsReconstructMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.reconstruct.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tools.reconstruct.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsReconstructMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.reconstruct.$post>) {
      return parseResponse(client.tools.reconstruct.$post(args, options))
    },
  })
}

export function usePostToolsReconstruct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tools.reconstruct.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tools.reconstruct.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsReconstructMutationOptions<TError, TOnMutateResult>(
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

export function getPostToolsResetMutationKey() {
  return ['tools', '/tools/reset', 'POST'] as const
}

export function getPostToolsResetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.reset.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostToolsResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.tools.reset.$post(undefined, options))
    },
  })
}

export function usePostToolsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.reset.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsResetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostToolsShutdownMutationKey() {
  return ['tools', '/tools/shutdown', 'POST'] as const
}

export function getPostToolsShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.shutdown.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostToolsShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.tools.shutdown.$post(undefined, options))
    },
  })
}

export function usePostToolsShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.shutdown.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostToolsShutdownMutationOptions<TError, TOnMutateResult>(
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

export function getToolsUnknownSopClassAcceptedQueryKey() {
  return ['tools', '/tools/unknown-sop-class-accepted'] as const
}

export function getToolsUnknownSopClassAcceptedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsUnknownSopClassAcceptedQueryKey>
  >({
    queryKey: getToolsUnknownSopClassAcceptedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools['unknown-sop-class-accepted'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useToolsUnknownSopClassAccepted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsUnknownSopClassAcceptedQueryKey>
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
      ...getToolsUnknownSopClassAcceptedQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolsUnknownSopClassAccepted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsUnknownSopClassAcceptedQueryKey>
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
      ...getToolsUnknownSopClassAcceptedQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutToolsUnknownSopClassAcceptedMutationKey() {
  return ['tools', '/tools/unknown-sop-class-accepted', 'PUT'] as const
}

export function getPutToolsUnknownSopClassAcceptedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsUnknownSopClassAcceptedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>,
    ) {
      return parseResponse(client.tools['unknown-sop-class-accepted'].$put(args, options))
    },
  })
}

export function usePutToolsUnknownSopClassAccepted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutToolsUnknownSopClassAcceptedMutationOptions<
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
